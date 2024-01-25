export interface BudgetRegister {
    budgetName : string;
    periodId : number;
    percentage : number;
    category : string;
}

export interface Budget {
    id : number
    budgetName : string
    percentage : number
    category : string
}