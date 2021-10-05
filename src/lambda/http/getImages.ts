import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS  from 'aws-sdk'
import * as AWSXray from 'aws-xray-sdk';

const XAWS = AWSXray.captureAWS(AWS)

const docClient = new XAWS.DynamoDB.DocumentClient();
const groupsTable = process.env.GROUPS_TABLE;
const imagesTable = process.env.IMAGES_TABLE;

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log('Processing event: ', event)
    
    const groupId = event.pathParameters.groupId;
    
    const groupExists = await checkGroupExists(groupId);

    if (!groupExists) {
        return {
            statusCode: 404,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                error: 'Group not found'
            })
        }
    }

    const images = await getImagesPerGroup(groupId);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            item: images
        })
    }
}

const checkGroupExists = async (groupId: string): Promise<boolean> => {
    const result = await docClient.get({
        TableName: groupsTable,
        Key: {
            id: groupId
        }
    }).promise()

    return !!result.Item
}

const getImagesPerGroup = async (groupId: string): Promise<any> => {
    const result = await docClient.query({
        TableName: imagesTable,
        KeyConditionExpression: 'groupId = :groupId',
        ExpressionAttributeValues: {
            ':groupId': groupId
        }
    }).promise()

    return result.Items
}