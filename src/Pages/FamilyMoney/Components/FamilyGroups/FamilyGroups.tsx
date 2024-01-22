import { useState } from "react";
import { useGroupsContext } from "../../Context/FamilyGroups/Groups.Context"
import { Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { storeFamilyGroup } from "../../../../Services/FamilyGroups/Groups.Service";
import { CreateGroupInfo } from "../../../../Models/FamilyGroups/Group.Model";

function FamilyGroups() {

   const [formActive, setFormActive] = useState(false);
   const {groups} = useGroupsContext();
  const {register,handleSubmit,formState: { errors },} = useForm<CreateGroupInfo>()

  const addGroupForm = () => {
     setFormActive(true);
    // console.log(groups);
  }

   const testGroups = () => {
     console.log(groups);
    
   }

  const registerNewGroup : SubmitHandler<CreateGroupInfo> = async (data) => {
      console.log(data);
      try {
        const result =  await storeFamilyGroup(data);
        console.log(result);
      } catch (error) {
        console.log("No se pudo crear grupos");
      }
  }
  
  return (
    <div>
       <Button onClick={testGroups}>Pruebita 2</Button>
        <div>
          <form onSubmit={handleSubmit(registerNewGroup)}>

            <label>Nombre del grupo</label>
            <input {...register("groupName", { required: true })} />
            {errors.groupName && <span>This field is required</span>}

            <br />
            <label>Cantidad de miembros</label>
            <input type="number" {...register("membersQuantity", { required: true })} />
            {errors.membersQuantity && <span>This field is required</span>}

            <br />
            <label>Tipo de grupo</label>
            <select {...register("familyGroupTypeId",{required:true})}>
              <option value="1">Presupuesto</option>
              <option value="2">Gastos</option>
            </select>
            {errors.familyGroupTypeId && <span>This field is required</span>}


            <br />
            <label>Dinero total del grupo</label>
            <input type="number" {...register("familyGroupTotalMoney", { required: true })} />
            {errors.familyGroupTotalMoney && <span>This field is required</span>}

            <br />
            <input type="submit" />
          </form> 
        </div>
    </div>
  )
}

export default FamilyGroups