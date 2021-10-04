import { APIGatewayAuthorizerResult, APIGatewayTokenAuthorizerEvent } from 'aws-lambda'
import { verify } from 'jsonwebtoken';
import { JwtToken } from '../../auth/jwtToken';
import * as middy from 'middy';
import { secretsManager } from 'middy/middlewares';

const secretId = process.env.AUTH_0_SECRET_ID;
const secretField = process.env.AUTH_0_SECRET_FIELD;

export const handler = middy(async (event: APIGatewayTokenAuthorizerEvent, context): Promise<APIGatewayAuthorizerResult> => {
    try {
      const decodedToken = verifyToken(event.authorizationToken, context.AUTH0_SECRET[secretField]);
      console.log('Authorized');
      return {
            principalId: decodedToken.sub,
            policyDocument: {
                Version: '2012-10-17',
                Statement: [
                    {
                        Action: 'execute-api:Invoke',
                        Effect: 'Allow',
                        Resource: '*'
                    }

                ]
            }
        }
    } catch (err){
        console.log("user was not authorized: ", err.message);
        return {
            principalId: 'user',
            policyDocument: {
                Version: '2012-10-17',
                Statement: [
                    {
                        Action: 'execute-api:Invoke',
                        Effect: 'Deny',
                        Resource: '*'
                    }

                ]
            }
        }

    }
})

function verifyToken(authHeader: string, secret: string): JwtToken {
    const token = getToken(authHeader);
    return verify(token, secret) as JwtToken;
}

function getToken(authHeader: string): string {
    if (!authHeader) throw new Error('No authentication header');

    if (!authHeader.toLowerCase().startsWith('bearer '))
        throw new Error('Invalid authentication header');

    const split = authHeader.split(' ');
    const token = split[1];

    return token;
}

handler.use(
    secretsManager({
        cache: true,
        cacheExpiryInMillis: 60000,
        throwOnFailedCall: true,
        secrets: {
            AUTH0_SECRET: secretId
        }
    })
);
