import { Budget } from "../Budgets/Budgets.Model"
import { Expense } from "../Expenses/Expense.Model"

export interface PeriodRegister { 
    periodName : String,
    familyGroupId : number,
    startDate : string,
    endDate : string
}

export interface Period {
    id : number,
    periodName : String,
    startDate : string,
    endDate : string
    budgets? : Budget[]
    expenses? : Expense[]
}
