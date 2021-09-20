import { DynamoDBStreamEvent, DynamoDBStreamHandler } from 'aws-lambda'
import 'source-map-support/register'

export const handler: DynamoDBStreamHandler = async (event: DynamoDBStreamEvent) => {
    console.log("Processing batch events from DynamoDb: ", JSON.stringify(event))

    for (const record of event.Records) {
        console.log("Processing record: ", JSON.stringify(record))
        
    }
}