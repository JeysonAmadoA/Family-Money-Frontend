import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentRegister } from "../../../../../Models/Payments/Payment.Model";
import { Form } from "react-bootstrap";
import RequiredField from "../../../../../Components/Form/RequiredField";
import { Group as GroupModel } from "../../../../../Models/FamilyGroups/Group.Model";
import { Member } from "../../../../../Models/Members/Member.Model";
import { storePayment } from "../../../../../Services/Payments/Payment.Service";
import { Period } from "../../../../../Models/Periods/Period.Model";
import { ChangeEvent, ReactNode, useState } from "react";
import { Budget } from "../../../../../Models/Budgets/Budgets.Model";

interface PaymentBudgetsFormProps{
    group : GroupModel,
    periods : Period[],
    children : ReactNode
}

function PaymentBudgetsForm({group, periods, children}: PaymentBudgetsFormProps) {


    const members : Member[] = group.members;

    const { register, handleSubmit, formState: { errors } } = useForm<PaymentRegister>();
    const [budgets, setBudgets] = useState<Budget[]>([]);

    const registerPeriod: SubmitHandler<PaymentRegister> = async (data) => {
        try {
          await storePayment(data);
          alert("Pago registrado");
        } catch (error) {
          console.log("No se pudo registrar pago", error);
        }
      };

    const updateSelectBudgets = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedPeriodId = event.target.value;
    const selectedPeriod: Period | undefined = periods.find(
        (period) => period.id === parseInt(selectedPeriodId)
    );
    
    if (selectedPeriod) {
        setBudgets(selectedPeriod.budgets ? selectedPeriod.budgets : []);
    } else {
        setBudgets([]);
    }
    };

  return (
    <form onSubmit={handleSubmit(registerPeriod)}>
        <div className="registerForm">
            <h2>Ingresar gastos</h2>

            <Form.Group className="mb-3" controlId="memberId-controlInput">
            <Form.Label>Miembros</Form.Label>
            <Form.Select {...register("memberId", { required: true })} defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                {members.map((member) => (
                    <option key={member.id} value={member.id}>{ member.memberName }</option>
                ))}
            </Form.Select>
            </Form.Group>
            <RequiredField error={errors.memberId}></RequiredField>


            <Form.Group className="mb-3" controlId="amount-controlInput">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="text" {...register("amount", { required: true})} />
            </Form.Group>
            <RequiredField error={errors.amount}></RequiredField>

            <Form.Group className="mb-3" controlId="observations-controlInput">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control type="text" {...register("observations", { required: true})} />
            </Form.Group>
            <RequiredField error={errors.observations}></RequiredField>

            <Form.Group className="mb-3" controlId="category-controlInput">
            <Form.Label>Seleccione periodo</Form.Label>
            <Form.Select defaultValue="" onChange={updateSelectBudgets}>
                <option value="" disabled>Selecciona una opción</option>
                {periods.map((period) => (
                    <option key={period.id} value={period.id}>
                    { `${period.periodName} ${period.startDate} - ${period.endDate} `}
                    </option>
                ) )}
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="budgetId-controlInput">
            <Form.Label>Presupuesto a abonar</Form.Label>
            <Form.Select {...register("budgetId", { required: true })} defaultValue="">
                <option value="" disabled>Seleccione presupuesto</option>
                {budgets.map((budget) => (
                    <option value={budget.id}>{ budget.budgetName }</option>
            ) )}
            </Form.Select>
            </Form.Group>
            <RequiredField error={errors.budgetId}></RequiredField>
            <div className="buttons">
                {children}
            </div>
        </div>
      </form> 
  )
}
export default PaymentBudgetsForm