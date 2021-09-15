import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'serverless-udagram-app',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
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
      GROUPS_TABLE: 'Groups-${self:provider.stage}'
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
        ],
        Resource: 'arn:aws:dynamodb:${self:provider.region}:*:table/${self:provider.environment.GROUPS_TABLE}',
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
      }
    }
  }
};

module.exports = serverlessConfiguration;
