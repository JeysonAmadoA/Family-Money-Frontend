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

export const MEMBER_ROLES = {
    PADRE : 'Padre',
    MADRE : 'Madre',
    ESPOSA : 'Esposa',
    ESPOSO : 'Esposo',
    HIJO : 'Hijo', 
    HIJA : 'Hija', 
    ROOMIE : 'Roomie',
    OTRO : 'Otro'
}