import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as middy from 'middy';
import { cors } from 'middy/middlewares';
import { createGroup } from 'src/Logic/groups';


export const handler = middy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log('Processing event: ', event)
    const parsedBody = JSON.parse(event.body);
    const newItem = {
        name: parsedBody.name,
        description: parsedBody.description,
    }
    const group = await createGroup(newItem, event.headers.Authorization);

    return {
        statusCode: 201,
        body: JSON.stringify({
            newItem: group
        })
    }
})

handler.use(
  cors()
)

