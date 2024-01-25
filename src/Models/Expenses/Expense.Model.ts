export interface ExpenseRegister {
    expenseName : string;
    periodId : number;
    expense : number;
    category : string;
}

export interface Expense {
    id : number
    expenseName : string
    expense : number
    category : string
}