export interface GroupType{
    typeId: number,
    name: string
}

export const emptyGroupType = {
    typeId: 0,
    name: ''
}

export const GROUP_TYPES = {
    BUDGET_ID : 1,
    EXPENSE_ID : 2,
}