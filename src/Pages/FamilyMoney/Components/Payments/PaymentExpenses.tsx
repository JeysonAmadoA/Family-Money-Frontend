import { ChangeEvent, useState } from "react";
import { PaymentRegister, PaymentTab } from "../../../../Models/Payments/Payment.Model";
import { Expense } from "../../../../Models/Expenses/Expense.Model";
import { Member } from "../../../../Models/Members/Member.Model";
import { SubmitHandler, useForm } from "react-hook-form";
import { storePayment } from "../../../../Services/Payments/Payment.Service";
import { Period } from "../../../../Models/Periods/Period.Model";
import { Button } from "react-bootstrap";



function PaymentExpenses({group, periods}: PaymentTab) {


    const { register, handleSubmit, formState: { errors } } = useForm<PaymentRegister>();
    const [expenses, setExpenses] = useState<Expense[]>([]);
  
  
    const members : Member[] = group.members;
  
    const registerPeriod: SubmitHandler<PaymentRegister> = async (data) => {
      try {
        await storePayment(data);
        alert("Pago registrado");
      } catch (error) {
        console.log("No se pudo registrar pago", error);
      }
    };
  
    const updateSelectExpenses = (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedPeriodId = event.target.value;
      const selectedPeriod: Period | undefined = periods.find(
        (period) => period.id === parseInt(selectedPeriodId)
      );
    
      if (selectedPeriod) {
        setExpenses(selectedPeriod.expenses ? selectedPeriod.expenses : []);
      } else {
        setExpenses([]);
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
        <select onChange={updateSelectExpenses}>
            <option disabled selected defaultValue="">Seleecione periodo</option>
            {periods.map((period) => (
              <option key={period.id} value={period.id}>
                { `${period.periodName} ${period.startDate} - ${period.endDate} `}
              </option>
            ) )}
        </select>
  
  
        <br />
        <label>Seleccione gasto</label> <br />
        <select {...register("expenseId",{required:true})}>
            <option disabled selected defaultValue="">Seleccione miembro</option>
            {expenses.map((expense) => (
              <option value={expense.id}>{ expense.expenseName }</option>
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
export default PaymentExpenses