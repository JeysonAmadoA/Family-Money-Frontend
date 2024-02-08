import { ReactNode } from "react";
import { Group as FamilyGroup } from "../../../../../Models/FamilyGroups/Group.Model";
import { useGroupsContext } from "../../../Context/FamilyGroups/Groups.Context";
import { SubmitHandler, useForm } from "react-hook-form";
import { MEMBER_ROLES, MemberRegister } from "../../../../../Models/Members/Member.Model";
import { getFamilyGroups } from "../../../../../Services/FamilyGroups/Groups.Service";
import { storeMember } from "../../../../../Services/Members/Member.Service";
import { NewMember } from "../../../../../Services/SharingData/NewRegister.Service";
import { Form } from "react-bootstrap";
import RequiredField from "../../../../../Components/Form/RequiredField";



interface MemberRegisterFormProps {
    group : FamilyGroup,
    children?: ReactNode; 
}

function MemberRegisterForm({group, children} : MemberRegisterFormProps) {

    const {setGroups} = useGroupsContext();
    const { register, handleSubmit, formState: { errors } } = useForm<MemberRegister>();

    const registerMember: SubmitHandler<MemberRegister> = async (data) => {
        try {
        await storeMember(data).
            then( async () => {
                const groups: FamilyGroup[] = await getFamilyGroups();
                setGroups(groups)
            });
            NewMember.setSubject(true);
        } catch (error) {
        console.log("No se pudo agregar miembros");
        }
    };

  return (
    <form onSubmit={handleSubmit(registerMember)}>
            <div className="registerForm">
                <h2>Agregar miembro al grupo {group.groupName}</h2>
                <Form.Group className="mb-3" controlId="memberName-controlInput">
                    <Form.Label>Nombre de miembro</Form.Label>
                    <Form.Control type="text" {...register("memberName", { required: true})} />
                </Form.Group>
                <RequiredField error={errors.memberName}></RequiredField>

                <Form.Group className="mb-3" controlId="memberRol-controlInput">
                    <Form.Label>Rol de miembro</Form.Label>
                    <Form.Select {...register("memberRol", { required: true })} defaultValue="">
                        <option value="" disabled>Selecciona una opción</option>
                        {Object.values(MEMBER_ROLES).map((role) => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <RequiredField error={errors.memberRol}></RequiredField>

                <Form.Group className="mb-3" controlId="economicContribution-controlInput">
                    <Form.Label>Aporte económico</Form.Label>
                    <Form.Control type="number" {...register("economicContribution", { required: true })} />
                </Form.Group>
                <RequiredField error={errors.economicContribution}></RequiredField>

                <input type="hidden" {...register("familyGroupId")} value={group.id}/>
                <div className="buttons">
                    {children}
                </div>
            </div>
        </form> 
  )
}
export default MemberRegisterForm