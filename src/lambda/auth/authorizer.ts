import { APIGatewayAuthorizerResult, APIGatewayAuthorizerHandler, APIGatewayTokenAuthorizerEvent } from 'aws-lambda'
import { verify } from 'jsonwebtoken';
import { JwtToken } from '../../auth/jwtToken';
import * as AWS from 'aws-sdk';


const secretId = process.env.AUTH_0_SECRET_ID;
const secretField = process.env.AUTH_0_SECRET_FIELD;

const client = new AWS.SecretsManager();

// cache the secret
let cachedSecret: string;

export const handler: APIGatewayAuthorizerHandler = async (event: APIGatewayTokenAuthorizerEvent): Promise<APIGatewayAuthorizerResult> => {
    try {
      const decodedToken = await verifyToken(event.authorizationToken);
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
}

async function verifyToken(authHeader: string): Promise<JwtToken> {
    const token = getToken(authHeader);
    const secret = await getSecret();
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

async function getSecret() {
    if (cachedSecret) return cachedSecret;

    const data = await client.getSecretValue({ SecretId: secretId }).promise();
    const secret = JSON.parse(data.SecretString)[secretField];

    cachedSecret = secret;

    return secret;
}