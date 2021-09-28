import { S3Event, SNSEvent, SNSHandler } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS from 'aws-sdk'
import * as Jimp from 'jimp/es'

const imagesBucket = process.env.IMAGES_BUCKET
const thumbnailBucket = process.env.THUMBNAILS_S3_BUCKET

const s3 = new AWS.S3({
    signatureVersion: 'v4',
})


export const handler: SNSHandler = async (event: SNSEvent) => {
    console.log('Processing SNS event: ', JSON.stringify(event))
    for (const snsRecord of event.Records) {
        const s3EventStr = snsRecord.Sns.Message
        console.log('Processing S3 event record: ', s3EventStr)
        const s3Event = JSON.parse(s3EventStr)
        await processImage(s3Event)
    }
}

async function processImage (event: S3Event) {
    for (const record of event.Records) {
        const key = record.s3.object.key
        console.log('Processing s3 item with Key: ', key)
        const response = await s3
            .getObject({
                Bucket: imagesBucket,
                Key: key
            }).promise()

        const body = response.Body as Buffer;
        const image = await Jimp.read(body)
        image.resize(150, Jimp.AUTO)
        const convertedBuffer = await image.getBufferAsync(Jimp.MIME_JPEG)
        await s3
            .putObject({
                Bucket: thumbnailBucket,
                Key: `${key}.jpeg`,
                Body: convertedBuffer
            }).promise()
    }
}