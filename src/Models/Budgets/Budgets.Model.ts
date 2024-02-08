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

export const BUDGET_CATEGORIES = {
    GASTOS_HOGAR : 'Gastos de hogar',
    AHORRO : 'Ahorro',
    COMIDA : 'Comida',
    VIVIENDA : 'Vivienda',
    OTROS : 'Otros',
}