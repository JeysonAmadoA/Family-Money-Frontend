import { GroupType } from "./GroupType.Model"

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
    familyGroupTotalMoney : number
}

export interface GroupList {
    groups : Group[]
}
