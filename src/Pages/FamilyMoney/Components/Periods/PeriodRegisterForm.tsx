import { SubmitHandler, useForm } from "react-hook-form";
import { PeriodRegister } from "../../../../Models/Periods/Period.Model";
import { storePeriod } from "../../../../Services/Periods/Period.Service";
import { NewPeriod } from "../../../../Services/SharingData/NewRegister.Service";
import { Button } from "react-bootstrap";

interface PeriodForm{
  groupId?: number, 
  formVisible:boolean
}

function PeriodRegisterForm({groupId, formVisible}:PeriodForm) {

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
    <>
      {formVisible && 
            <form onSubmit={handleSubmit(registerPeriod)}>
                <label>Nombre de miembro</label> <br />
                <input {...register("periodName", { required: true })} />
                {errors.periodName && <span>This field is required</span>}

                <br />
                <label>Rol de miembro</label> <br />
                <input type="date" {...register("startDate", { required: true })} />
                {errors.startDate && <span>This field is required</span>}

                <br />
                <label>Aporte económico</label> <br />
                <input type="date" {...register("endDate", { required: true })} />
                {errors.endDate && <span>This field is required</span>}

                <input type="hidden" {...register("familyGroupId")} value={groupId}/>

                <br />
                <Button variant="primary" type="submit">
                    Crear periodo
                </Button>
            </form> 
      }
    </>
  )
}
export default PeriodRegisterForm