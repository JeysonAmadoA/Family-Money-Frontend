import { SubmitHandler, useForm } from "react-hook-form";
import { BUDGET_CATEGORIES, BudgetRegister } from "../../../../../Models/Budgets/Budgets.Model";
import { storeBudget } from "../../../../../Services/Budgets/Budget.Service";
import { NewPeriod } from "../../../../../Services/SharingData/NewRegister.Service";
import { Form } from "react-bootstrap";
import RequiredField from "../../../../../Components/Form/RequiredField";
import { ReactNode } from "react";

export interface BudgetForm {
    children : ReactNode
    periodId : number
}

function BudgetRegisterForm({children, periodId} : BudgetForm) {

    const { register, handleSubmit, formState: { errors } } = useForm<BudgetRegister>();

    const registerBudget: SubmitHandler<BudgetRegister> = async (data) => {
      try {
        await storeBudget(data);
        alert("Presupuesto agregado");
        NewPeriod.setSubject(true);
      } catch (error) {
        console.log("No se pudo periodo", error);
      }
    };

  return (
    <form onSubmit={handleSubmit(registerBudget)}>
      <div className="registerForm">
        <h2>Agregar presupuesto</h2>
        <Form.Group className="mb-3" controlId="budgetName-controlInput">
          <Form.Label>Nombre de miembro</Form.Label>
          <Form.Control type="text" {...register("budgetName", { required: true})} />
        </Form.Group>
        <RequiredField error={errors.budgetName}></RequiredField>

        <Form.Group className="mb-3" controlId="category-controlInput">
          <Form.Label>Rol de miembro</Form.Label>
          <Form.Select {...register("category", { required: true })} defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          {Object.values(BUDGET_CATEGORIES).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
          </Form.Select>
        </Form.Group>
        <RequiredField error={errors.category}></RequiredField>

        <Form.Group className="mb-3" controlId="percentage-controlInput">
          <Form.Label>Aporte económico</Form.Label>
          <Form.Control type="number" {...register("percentage", { required: true })} />
        </Form.Group>
        <RequiredField error={errors.percentage}></RequiredField>

        <input type="hidden" {...register("periodId")} value={periodId}/>
        <div className="buttons">
          {children}
        </div>
      </div>
    </form> 
  )
}
export default BudgetRegisterForm