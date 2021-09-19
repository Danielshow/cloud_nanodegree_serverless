import { S3Handler, S3Event } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient();
const connectionsTable = process.env.CONNECTIONS_TABLE;
const stage = process.env.STAGE;
const apiId = process.env.API_ID;

const connectionParams = {
    apiVersion: '2018-11-29',
    endpoint: `${apiId}.execute-api.us-west-2.amazonaws.com/${stage}`
}

const apiGateway = new AWS.ApiGatewayManagementApi(connectionParams);
export const handler: S3Handler = async (event: S3Event) => {
    for (const record of event.Records) {
        const key = record.s3.object.key
        console.log('Processing s3 item with Key: ', key)

        const connections = await docClient.scan({
            TableName: connectionsTable
        }).promise()
        
        const payload = {
            imageId: key,
        }

        for (const connection of connections.Items) {
            const connectionId = connection.connectionId
            await sendMessageToClient(connectionId, payload)
        }
    }
}

async function sendMessageToClient(connectionId, payload) {
    try {
      console.log("sending message to a connection: ", connectionId)
      await apiGateway.postToConnection({
        ConnectionId: connectionId,
        Data: JSON.stringify(payload)
      }).promise()
    } catch(err){
      console.log("error sending message to a connection: ", JSON.stringify(err))
      if (err.statusCode == 410){
          await docClient.delete({
            TableName: connectionsTable,
            Key: {
                connectionId: connectionId
            }
          }).promise()
      }
    }
} 