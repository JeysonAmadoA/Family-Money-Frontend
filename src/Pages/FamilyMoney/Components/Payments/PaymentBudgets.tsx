import { SubmitHandler, useForm } from "react-hook-form";
import { Group } from "../../../../Models/FamilyGroups/Group.Model"
import { PaymentRegister } from "../../../../Models/Payments/Payment.Model";
import { Period } from "../../../../Models/Periods/Period.Model"
import { Button } from "react-bootstrap";
import { storePayment } from "../../../../Services/Payments/Payment.Service";
import { Member } from "../../../../Models/Members/Member.Model";
import { ChangeEvent, useState } from "react";
import { Budget } from "../../../../Models/Budgets/Budgets.Model";

interface PaymentTab {
  group : Group,
  periods : Period[]
}

function PaymentBudgets({group, periods}: PaymentTab) {


  const { register, handleSubmit, formState: { errors } } = useForm<PaymentRegister>();
  const [budgets, setBudgets] = useState<Budget[]>([]);


  const members : Member[] = group.members;

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
    <>
      <form onSubmit={handleSubmit(registerPeriod)}>

      <label>Miembro</label>
      <br />
      <select {...register("memberId",{required:true})}>
          <option disabled selected value="">Seleecione miembro</option>
          {members.map((member) => (
            <option value={member.id}>{ member.memberName }</option>
          ) )}
          
      </select>

      <br />
      <label>Cantidad</label> <br />
      <input type="number" {...register("amount", { required: true })} />
      {errors.amount && <span>This field is required</span>}

      <br />
      <label>Observaciones</label> <br />
      <textarea {...register("observations", { required: true })} />
      {errors.observations && <span>This field is required</span>}

      <br />
      <label>Periodo</label> <br />
      <select onChange={updateSelectBudgets}>
          <option disabled selected defaultValue="">Seleecione periodo</option>
          {periods.map((period) => (
            <option key={period.id} value={period.id}>
              { `${period.periodName} ${period.startDate} - ${period.endDate} `}
            </option>
          ) )}
      </select>


      <br />
      <label>Seleccione presupuesto</label> <br />
      <select {...register("budgetId",{required:true})}>
          <option disabled selected defaultValue="">Seleecione miembro</option>
          {budgets.map((budget) => (
            <option value={budget.id}>{ budget.budgetName }</option>
          ) )}
      </select>


      <br />
      <Button variant="primary" type="submit">
          Crear periodo
      </Button>
      </form> 
    
    </>
   
  )
}
export default PaymentBudgets