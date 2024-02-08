import { SubmitHandler, useForm } from "react-hook-form"
import { CreateGroupInfo } from "../../../../../Models/FamilyGroups/Group.Model"
import { storeFamilyGroup } from "../../../../../Services/FamilyGroups/Groups.Service";
import { Form } from "react-bootstrap";
import { GROUP_TYPES } from "../../../../../Models/FamilyGroups/GroupType.Model";
import RequiredField from "../../../../../Components/Form/RequiredField";
import { useGroupsContext } from "../../../Context/FamilyGroups/Groups.Context";
import { ReactNode } from "react";

interface GroupRegisterFormProps {
    children?: ReactNode; 
}

function GroupRegisterForm({children} : GroupRegisterFormProps) {

    const {groups, setGroups} = useGroupsContext();

    const {register,handleSubmit,formState: { errors }} = useForm<CreateGroupInfo>()

    const registerNewGroup : SubmitHandler<CreateGroupInfo> = async (data) => {
        try {
            const result =  await storeFamilyGroup(data);
            groups.push(result);
            setGroups(groups);    
            alert("Registrado");
            window.location.reload();
        } catch (error) {
            alert("No fue posible registrar grupo") 
        }
    }

    return (
        <form onSubmit={handleSubmit(registerNewGroup)}>
            <div className="registerForm">
                <h2>Registro de grupo</h2>
                <Form.Group className="mb-3" controlId="groupName-controlInput">
                    <Form.Label>Nombre del grupo</Form.Label>
                    <Form.Control type="text" {...register("groupName", { required: true})} />
                </Form.Group>
                <RequiredField error={errors.groupName}></RequiredField>

                <Form.Group className="mb-3" controlId="membersQuantity-controlInput">
                    <Form.Label>Cantidad de miembros</Form.Label>
                    <Form.Control type="number" {...register("membersQuantity", { required: true })} />
                </Form.Group>
                <RequiredField error={errors.membersQuantity}></RequiredField>

                <Form.Group className="mb-3" controlId="familyGroupTypeId-controlInput">
                    <Form.Label>Tipo de grupo</Form.Label>
                    <Form.Select {...register("familyGroupTypeId", { required: true })} defaultValue="">
                        <option value="" disabled>Selecciona una opción</option>
                        <option value={GROUP_TYPES.BUDGET_ID}>Presupuesto</option>
                        <option value={GROUP_TYPES.EXPENSE_ID}>Gastos</option>
                    </Form.Select>
                </Form.Group>
                <RequiredField error={errors.familyGroupTypeId}></RequiredField>
                <div className="buttons">
                    {children}
                </div>
            </div>
        </form> 
    )
}
export default GroupRegisterForm