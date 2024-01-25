import { Budget } from "../Budgets/Budgets.Model";
import { Group } from "../FamilyGroups/Group.Model";
import { Member } from "../Members/Member.Model";
import { Period } from "../Periods/Period.Model";

export interface PaymentRegister {
    memberId : number,
    amount : number,
    observations : string,
    expenseId? : number,
    budgetId? : number,
}

export interface Payment {
    id: number,
    member?: Member,
    amount: number,
    observations: string,
    budget?: Budget
}

export interface PaymentTab {
    group : Group,
    periods : Period[]
}