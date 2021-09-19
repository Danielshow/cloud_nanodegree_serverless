import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS  from 'aws-sdk'
import * as uuid from 'uuid'

const docClient = new AWS.DynamoDB.DocumentClient()

const groupsTable = process.env.GROUPS_TABLE
const imagesTable = process.env.IMAGES_TABLE
const bucketName = process.env.IMAGES_BUCKET
const SIGNED_URL_EXPIRATION = process.env.SIGNED_URL_EXPIRATION || 60 * 60 * 24 * 7

const s3 = new AWS.S3({
  signatureVersion: 'v4',
})

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('Caller event', event)
  const groupId = event.pathParameters.groupId
  const validGroupId = await groupExists(groupId)
  const parsedBody = JSON.parse(event.body);

  if (!validGroupId) {
    return {
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'Group does not exist'
      })
    }
  }

  // TODO: Create an image
  const imageId = uuid.v4()

  const newImage = {
      groupId,
      imageId,
      ...parsedBody,
      imageUrl: `https://${bucketName}.s3.amazonaws.com/${imageId}`,
      timestamp: new Date().toISOString(),
  }

  const url = getUploadUrl(imageId);

  await docClient.put({
      TableName: imagesTable,
      Item: newImage
  }).promise()

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      newItem: newImage,
      uploadUrl: url
    })
  }
}

async function groupExists(groupId: string) {
  const result = await docClient
    .get({
      TableName: groupsTable,
      Key: {
        id: groupId
      }
    })
    .promise()

  console.log('Get group: ', result)
  return !!result.Item
}

function getUploadUrl(imageId: string) {
  const params = {
    Bucket: bucketName,
    Key: imageId,
    Expires: Number(SIGNED_URL_EXPIRATION)
  }
  return s3.getSignedUrl('putObject', params)
}