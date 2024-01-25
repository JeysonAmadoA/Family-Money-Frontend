import { Budget, BudgetRegister } from "../../Models/Budgets/Budgets.Model";
import { budgetAxios, getHeaderConfig } from "../../Utilities";

const storeBudget = async (budgetData : BudgetRegister) : Promise<Budget> => {
    try {        
        const respose = await budgetAxios.post('/store', budgetData, getHeaderConfig()); 
        console.log(respose);
        return respose.data;
    } catch (error) {
        throw new Error("Error al agregar periodo" + error);
    }
}

export {storeBudget};