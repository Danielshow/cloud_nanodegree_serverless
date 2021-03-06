import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import * as AWSXray from 'aws-xray-sdk';

import { Group } from "../models/Group";

const XAWS = AWSXray.captureAWS(AWS)
export class GroupsAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly groupsTable = process.env.GROUPS_TABLE
  ) {}

  async getAllGroups(userId: string): Promise<Group[]> {
    const result = await this.docClient
      .query({
        TableName: this.groupsTable,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
          ":userId": userId
        }
      })
      .promise();

    const items = result.Items;

    return items as Group[];
  }

  async createGroup(group: Group): Promise<Group> {
    await this.docClient
      .put({
        TableName: this.groupsTable,
        Item: group
      })
      .promise();

    return group;
  }
}

function createDynamoDBClient() {
  if (process.env.IS_OFFLINE) {
    console.log("Creating a local DynamoDB instance");
    return new XAWS.DynamoDB.DocumentClient({
      region: "localhost",
      endpoint: "http://localhost:8000"
    });
  }

  return new XAWS.DynamoDB.DocumentClient();
}
