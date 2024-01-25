import { Member } from "../Members/Member.Model"
import { GroupType, emptyGroupType } from "./GroupType.Model"

export interface CreateGroupInfo {
    groupName : string,
    membersQuantity : number,
    familyGroupTypeId : number,
    familyGroupTotalMoney : number
}

export interface Group {
    id: number
    groupName : string,
    membersQuantity : number,
    familyGroupType : GroupType,
    familyGroupTotalMoney : number,
    members : Member[]
}

export const emptyGroup : Group = {
    id: 0,
    groupName : '',
    membersQuantity : 0,
    familyGroupType : emptyGroupType,
    familyGroupTotalMoney : 0,
    members : [],
}

export interface GroupList {
    groups : Group[]
}
