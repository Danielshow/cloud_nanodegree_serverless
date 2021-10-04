import * as uuid from "uuid";
import { Group } from "../models/Group";
import { GroupsAccess } from "../data/groupsAccess";
import { CreateGroupRequest } from "../requests/CreateGroupRequest";
import { getUserId } from "src/auth/utils";

const groupsAccess = new GroupsAccess();

export async function getAllGroups(jwtToken: string): Promise<Group[]> {
  const userId = getUserId(jwtToken);
  const groups = await groupsAccess.getAllGroups(userId);
  return groups.map((group) => {
    return {
      id: group.id,
      name: group.name,
      description: group.description,
      userId: group.userId
    };
  });
}

export async function createGroup(
  createGroupRequest: CreateGroupRequest,
  jwtToken: string
): Promise<Group> {
  const userId = getUserId(jwtToken);
  const groupId = uuid.v4();
  const newGroup = {
    id: groupId,
    name: createGroupRequest.name,
    description: createGroupRequest.description,
    userId
  };
  await groupsAccess.createGroup(newGroup);
  return newGroup;
}
