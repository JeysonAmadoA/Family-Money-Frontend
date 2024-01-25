export interface MemberRegister {
    memberName : string,
    familyGroupId : number, 
    memberRol : string,
    economicContribution : number
}

export interface Member {
    id : number,
    memberName : string,
    memberRol : string,
    economicContribution : number
}

export const emptyMember : Member = {
    id : 0,
    memberName : '',
    memberRol : '',
    economicContribution : 0
}