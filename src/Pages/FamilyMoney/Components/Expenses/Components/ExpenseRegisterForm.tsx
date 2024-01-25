import { SubmitHandler, useForm } from "react-hook-form";
import { ExpenseRegister } from "../../../../../Models/Expenses/Expense.Model";
import { NewPeriod } from "../../../../../Services/SharingData/NewRegister.Service";
import { Button } from "react-bootstrap";
import { storeExpense } from "../../../../../Services/Expenses/Expense.Service";

export interface ExpenseForm {
    periodId : number
}

function ExpenseRegisterForm({periodId} : ExpenseForm) {

    const { register, handleSubmit, formState: { errors } } = useForm<ExpenseRegister>();

    const registerExpense: SubmitHandler<ExpenseRegister> = async (data) => {
        try {
          console.log(data);
          await storeExpense(data);
          alert("Gasto agregado agregado");
          NewPeriod.setSubject(true);
        } catch (error) {
          console.log("No se pudo periodo", error);
        }
      };


  return (
    <form onSubmit={handleSubmit(registerExpense)}>

                <label>Nombre de gasto</label> <br />
                <input {...register("expenseName", { required: true })} />
                {errors.expenseName && <span>This field is required</span>}

                <br />
                <label>Categoria</label> <br />
                <input type="text" {...register("category", { required: true })} />
                {errors.category && <span>This field is required</span>}

                <br />
                <label>Valor de gasto</label> <br />
                <input type="number" {...register("expense", { required: true })} />
                {errors.expense && <span>This field is required</span>}

                <input type="hidden" {...register("periodId")} value={periodId}/>

                <br />
                <Button variant="primary" type="submit">
                    Agregar gasto
                </Button>
            </form> 
  )
}

export default ExpenseRegisterForm