import { APIGatewayAuthorizerResult, APIGatewayAuthorizerHandler, APIGatewayTokenAuthorizerEvent } from 'aws-lambda'

export const handler: APIGatewayAuthorizerHandler = async (event: APIGatewayTokenAuthorizerEvent): Promise<APIGatewayAuthorizerResult> => {
    try {
      verifyToken(event.authorizationToken);
      console.log('Authorized');
      return {
            principalId: 'user',
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

async function verifyToken(authHeader: string): Promise<void> {
    const token = getToken(authHeader);
    if (token != '123') throw new Error('Invalid token');
    // const url = `https://${process.env.AUTH0_DOMAIN}/tokeninfo?id_token=${token}`;
    // const response = await fetch(url, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     }
    // });
    // const body = await response.json();
    // if (response.status !== 200) {
    //     throw new Error(body.error_description);
    // }
}

function getToken(authHeader: string): string {
    if (!authHeader) throw new Error('No authentication header');

    if (!authHeader.toLowerCase().startsWith('bearer '))
        throw new Error('Invalid authentication header');

    const split = authHeader.split(' ');
    const token = split[1];

    return token;
}