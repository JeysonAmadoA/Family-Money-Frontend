import { Expense, ExpenseRegister } from "../../Models/Expenses/Expense.Model";
import { expenseAxios, getHeaderConfig } from "../../Utilities";


const storeExpense = async (data:ExpenseRegister) : Promise<Expense> => {
    try {
        const response = await expenseAxios.post("/store", data, getHeaderConfig());
        return response.data;
    } catch (error) {
        throw new Error("Error al recuperar información de grupos:" + error);
    }    
}

export {storeExpense};