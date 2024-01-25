import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Group } from "../../../../../Models/FamilyGroups/Group.Model";
import { MemberRegister } from "../../../../../Models/Members/Member.Model";
import { storeMember } from "../../../../../Services/Members/Member.Service";
import { NewMember } from "../../../../../Services/SharingData/NewRegister.Service";
import { Button, Modal } from "react-bootstrap";
import { useGroupsContext } from "../../../Context/FamilyGroups/Groups.Context";
import { getFamilyGroups } from "../../../../../Services/FamilyGroups/Groups.Service";



interface MemberModal {
    group : Group
    modalState : boolean
    closeModal: (id: number) => void; 
}

function CreateMemberModal({ group, modalState, closeModal }: MemberModal) {

  const { register, handleSubmit, formState: { errors } } = useForm<MemberRegister>();
  const {setGroups} = useGroupsContext();

  useEffect(() => {
    if (!modalState) {
      handleClose();
    }
  }, [modalState]);

  const handleClose = () => closeModal(group.id);

  const registerMember: SubmitHandler<MemberRegister> = async (data) => {
    try {
      await storeMember(data).
        then( async () => {
          const groups: Group[] = await getFamilyGroups();
          setGroups(groups)
        });
      handleClose();
      NewMember.setSubject(true);
    } catch (error) {
      console.log("No se pudo agregar miembros");
    }
  };

    return (
        <Modal show={modalState} onHide={handleClose}>
          <form onSubmit={handleSubmit(registerMember)}>
              <Modal.Header closeButton>
                  <Modal.Title>
                    Agregar miembro al grupo {group.groupName}
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body> 

                  <label>Nombre de miembro</label> <br />
                  <input {...register("memberName", { required: true })} />
                  {errors.memberName && <span>This field is required</span>}

                  <br />
                  <label>Rol de miembro</label> <br />
                  <input type="text" {...register("memberRol", { required: true })} />
                  {errors.memberRol && <span>This field is required</span>}

                  <br />
                  <label>Aporte económico</label> <br />
                  <input type="number" {...register("economicContribution", { required: true })} />
                  {errors.economicContribution && <span>This field is required</span>}

                  <input type="hidden" {...register("familyGroupId")} value={group.id}/>

                  <br />
                  
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                  </Button>
                  <Button variant="primary" type="submit">
                      Agregar miembro
                  </Button>
              </Modal.Footer>
          </form> 
        </Modal>     
    )
}

export default CreateMemberModal