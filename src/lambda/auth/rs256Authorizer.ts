import { APIGatewayAuthorizerResult, APIGatewayTokenAuthorizerEvent } from 'aws-lambda'
import 'source-map-support/register'
import { verify } from 'jsonwebtoken';
import { JwtToken } from 'src/auth/jwtToken';


const cert = `
-----BEGIN CERTIFICATE-----
MIIDDTCCAfWgAwIBAgIJUOZcoG46t4lwMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNV
BAMTGWRldi1rNW40YmZqaS51cy5hdXRoMC5jb20wHhcNMjEwOTI4MTIzNzA3WhcN
MzUwNjA3MTIzNzA3WjAkMSIwIAYDVQQDExlkZXYtazVuNGJmamkudXMuYXV0aDAu
Y29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnYOeYQz+33SC0xMv
jf+sUBRJZ0Fl0LCK8Lf+JJDAKKRacqdVJSgqNJ0g5//UFItU5KJlm28ic+tA+RYO
07+vu1a0JH1GP9DCH3NYHWEokhGUZpwWiGdhmc0Vm5mrFcxl3+L+AVhZOgW1NpyG
K1wmXN6zassiREuVQc9Jq+K/kXp+956cnrrSItrStGJgEtigr2QUDYxEJf52KcBf
d0xLWSVqAeNsoigjwIFTQWs36W29Yq5Y5iDa9iD7uzNNW5R0vTUZaD31PpdiK+p7
QCDdtGTrvmqy5vrBNIddcM2sr1ZOpoc61POS1I2O8LjQyyKuY5My71Wu85zAz50Z
B7ZHIwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBSU/YD6rL7x
l6F6gHqb0GXDRfDljDAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEB
ACTjU9Qbq4XwbuiUqajMtRdVsyAycUwnp1L+kVvH89K8yVUXvFdIf8izpQ/pOePy
F0y8J+Bv7BTO7fP2r61IK2/ESF6ek6vWtQlGZzdLEtTCWizYyfeSk6E40aKurh8c
J4OHxkBYpjlAbYeot1YIOthvd7f1kOlV+HuYV8hFPeFCujJIkaLRzncfhfp5ZaYE
5uWS/TfUCIkPt5/5NPhgYq9pvL5ieYqQsOJaGBpZCr4J32dqOk/zsNXROnk00A0d
5ZE/Aworwwl/7sPE5Kuq17bBtVG6laW4z3TvXtajvHcv7AJlLOo9f8h8tbzj9W1m
OYBi21CJgZu4lJd1eSa2fy4=
-----END CERTIFICATE-----
`;
export const handler = async (event: APIGatewayTokenAuthorizerEvent): Promise<APIGatewayAuthorizerResult> => {
    try {
        const decodedToken = verifyToken(event.authorizationToken);
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


function verifyToken(authHeader: string): JwtToken {
    const token =  getToken(authHeader);
    return verify(
        token,
        cert,
        { algorithms: ['RS256'] }
    ) as JwtToken
}


function getToken(authHeader: string): string {
    if (!authHeader) throw new Error('No authentication header');

    if (!authHeader.toLowerCase().startsWith('bearer '))
        throw new Error('Invalid authentication header');

    const split = authHeader.split(' ');
    const token = split[1];

    return token;
}