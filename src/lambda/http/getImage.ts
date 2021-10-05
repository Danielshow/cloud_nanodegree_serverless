import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS  from 'aws-sdk'
import * as AWSXray from 'aws-xray-sdk';

const XAWS = AWSXray.captureAWS(AWS)

const docClient = new XAWS.DynamoDB.DocumentClient();
const imageIdIndex = process.env.IMAGE_ID_INDEX;
const imagesTable = process.env.IMAGES_TABLE;

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log('Processing event: ', event)
    
    const imageId = event.pathParameters.imageId;
    const result = await docClient.query({
        TableName: imagesTable,
        IndexName: imageIdIndex,
        KeyConditionExpression: 'imageId = :imageId',
        ExpressionAttributeValues: {
            ':imageId': imageId
        }
    }).promise();
    if (result.Count === 0) {
        return {
            statusCode: 404,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                error: 'Image not found'
            })
        }
    }
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(result.Items[0])
    }
}


// import * as express from 'express'
// import * as awsServerlessExpress from 'aws-serverless-express'
// const app = express()
// app.get('/groups', async (_req, res) => {
//     // TODO: get all groups as before
//     const groups = ...
  
//     // Return a list of groups
//     res.json({
//       items: groups
//     })
//   })

//   // Create Express server
// const server = awsServerlessExpress.createServer(app)
// // Pass API Gateway events to the Express server
// exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }