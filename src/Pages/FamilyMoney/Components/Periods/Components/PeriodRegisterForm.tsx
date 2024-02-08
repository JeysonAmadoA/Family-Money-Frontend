import { SubmitHandler, useForm } from "react-hook-form";
import { PeriodRegister } from "../../../../../Models/Periods/Period.Model";
import { storePeriod } from "../../../../../Services/Periods/Period.Service";
import { NewPeriod } from "../../../../../Services/SharingData/NewRegister.Service";
import { Form } from "react-bootstrap";
import RequiredField from "../../../../../Components/Form/RequiredField";
import { ReactNode } from "react";

interface PeriodForm{
  groupId?: number, 
  children?: ReactNode; 
}

function PeriodRegisterForm({groupId, children}:PeriodForm) {

    const { register, handleSubmit, formState: { errors } } = useForm<PeriodRegister>();


    const registerPeriod: SubmitHandler<PeriodRegister> = async (data) => {
        try {
          await storePeriod(data);
          alert("Periodo agregado");
          NewPeriod.setSubject(true);
        } catch (error) {
          console.log("No se pudo periodo", error);
        }
      };

  return (
    <form onSubmit={handleSubmit(registerPeriod)}>
        <div className="registerForm">
          <Form.Group className="mb-3" controlId="periodName-controlInput">
              <Form.Label>Nombre de periodo</Form.Label>
              <Form.Control type="text" {...register("periodName", { required: true})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="startDate-controlInput">
              <Form.Label>Fecha inicial</Form.Label>
              <Form.Control type="date" {...register("startDate", { required: true })} />
          </Form.Group>
          <RequiredField error={errors.startDate}></RequiredField>

          <Form.Group className="mb-3" controlId="endDate-controlInput">
              <Form.Label>Fecha final</Form.Label>
              <Form.Control type="date" {...register("endDate", { required: true })} />
          </Form.Group>
          <RequiredField error={errors.startDate}></RequiredField>
          <input type="hidden" {...register("familyGroupId")} value={groupId}/>
          <div className="buttons">
            {children}
          </div>
        </div>
    </form> 
  )
}
export default PeriodRegisterForm