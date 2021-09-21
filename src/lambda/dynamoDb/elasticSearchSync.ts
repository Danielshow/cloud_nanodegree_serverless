import { DynamoDBStreamEvent, DynamoDBStreamHandler } from 'aws-lambda'
import 'source-map-support/register'
import * as elasticsearch from 'elasticsearch'
import * as httpAwsEs from 'http-aws-es'


const esEndpoint = process.env.ES_ENDPOINT
const es = new elasticsearch.Client({
    hosts: [esEndpoint],
    connectionClass: httpAwsEs
})

export const handler: DynamoDBStreamHandler = async (event: DynamoDBStreamEvent) => {
    console.log("Processing batch events from DynamoDb: ", JSON.stringify(event))

    for (const record of event.Records) {
        console.log("Processing record: ", JSON.stringify(record))
        if (record.eventName == "INSERT") {
            await processRecord(record)
        }
    }
}

async function processRecord(record: any) {
    const item = record.dynamodb.NewImage
    const imageId = item.imageId.S
    const body = {
        imageId: imageId,
        groupId: item.groupId.S,
        imageUrl: item.imageUrl.S,
        title: item.title.S,
        timestamp: item.timestamp.S,
    }
    await es.index({
        index: 'images-index',
        type: 'images',
        id: imageId,
        body
    })
}