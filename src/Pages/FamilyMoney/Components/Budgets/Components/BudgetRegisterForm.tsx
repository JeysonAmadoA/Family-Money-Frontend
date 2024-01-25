import { SubmitHandler, useForm } from "react-hook-form";
import { BudgetRegister } from "../../../../../Models/Budgets/Budgets.Model";
import { storeBudget } from "../../../../../Services/Budgets/Budget.Service";
import { NewPeriod } from "../../../../../Services/SharingData/NewRegister.Service";
import { Button } from "react-bootstrap";

export interface BudgetForm {
    periodId : number
}

function BudgetRegisterForm({periodId} : BudgetForm) {

    const { register, handleSubmit, formState: { errors } } = useForm<BudgetRegister>();

    const registerBudget: SubmitHandler<BudgetRegister> = async (data) => {
        try {
          console.log(data);
          
          await storeBudget(data);
          alert("Presupuesto agregado");
          NewPeriod.setSubject(true);
        } catch (error) {
          console.log("No se pudo periodo", error);
        }
      };


  return (
    <form onSubmit={handleSubmit(registerBudget)}>

                <label>Nombre de presupuesto</label> <br />
                <input {...register("budgetName", { required: true })} />
                {errors.budgetName && <span>This field is required</span>}

                <br />
                <label>Categoria</label> <br />
                <input type="text" {...register("category", { required: true })} />
                {errors.category && <span>This field is required</span>}

                <br />
                <label>Porcentaje</label> <br />
                <input type="number" {...register("percentage", { required: true })} />
                {errors.percentage && <span>This field is required</span>}

                <input type="hidden" {...register("periodId")} value={periodId}/>

                <br />
                <Button variant="primary" type="submit">
                    Crear periodo
                </Button>
            </form> 
  )
}
export default BudgetRegisterForm