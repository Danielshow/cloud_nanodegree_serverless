import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'serverless-udagram-app',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    documentation: {
      api: {
        info: {
          version: '1.0.0',
          title: 'Serverless Udagram',
          description: 'Serverless application',
        }
      },
    }
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      GROUPS_TABLE: 'Groups-${self:provider.stage}',
      IMAGES_TABLE: 'Images-${self:provider.stage}',
      IMAGE_ID_INDEX: 'imageIdIndex',
    },
    lambdaHashingVersion: '20201221',
    stage: 'dev',
    region: 'us-west-2',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:Scan',
          'dynamodb:PutItem',
          'dynamodb:GetItem',
        ],
        Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.GROUPS_TABLE}',
      },
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:Query',
          'dynamodb:PutItem',
        ],
        Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.IMAGES_TABLE}',
      },
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:Query',
        ],
        Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.IMAGES_TABLE}/index/${self:provider.environment.IMAGE_ID_INDEX}',
      },
    ],
  },
  // import the function via paths
  functions: { 
    GetGroups: {
      handler: `src/lambda/http/getGroups.handler`,
      events: [
        {
          http: {
            method: 'get',
            path: 'groups',
            cors: true,
          }
        }
      ]
    },
    CreateGroup: {
      handler: `src/lambda/http/createGroup.handler`,
      events: [
        {
          http: {
            method: 'post',
            path: 'groups',
            cors: true,
            request:{
              schema: {
                'application/json': "${file(models/create-group-request.json)}"
              }
            },
          }
        }
      ]
    },
    GetImages: {
      handler: `src/lambda/http/getImages.handler`,
      events: [
        {
          http: {
            method: 'get',
            path: 'groups/{groupId}/images',
            cors: true
          }
        }
      ]
    },
    GetImage: {
      handler: `src/lambda/http/getImage.handler`,
      events: [
        {
          http: {
            method: 'get',
            path: 'images/{imageId}',
            cors: true
          }
        }
      ]
    },
    CreateImage: {
      handler: `src/lambda/http/createImage.handler`,
      events: [
        {
          http: {
            method: 'post',
            path: 'group/{groupId}/image',
            cors: true,
            request:{
              schema: {
                'application/json': "${file(models/create-image-request.json)}"
              }
            },
          }
        }
      ]
    }
   },
  resources: {
    Resources: {
      GroupsTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S'
            }
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH'
            }
          ],
          BillingMode: 'PAY_PER_REQUEST',
          TableName: '${self:provider.environment.GROUPS_TABLE}'
        }
      },
      ImagesTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          AttributeDefinitions: [
            {
              AttributeName: 'groupId',
              AttributeType: 'S'
            },
            {
              AttributeName: 'timestamp',
              AttributeType: 'S'
            },
            {
              AttributeName: 'imageId',
              AttributeType: 'S'
            }
          ],
          KeySchema: [
            {
              AttributeName: 'groupId',
              KeyType: 'HASH'
            },
            {
              AttributeName: 'timestamp',
              KeyType: 'RANGE'
            }
          ],
          GlobalSecondaryIndexes: [
            {
              IndexName: '${self:provider.environment.IMAGE_ID_INDEX}',
              KeySchema: [
                {
                  AttributeName: 'imageId',
                  KeyType: 'HASH'
                },
              ],
              Projection: {
                ProjectionType: 'ALL'
              },          
            }
          ],
          BillingMode: 'PAY_PER_REQUEST',
          TableName: '${self:provider.environment.IMAGES_TABLE}'
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
