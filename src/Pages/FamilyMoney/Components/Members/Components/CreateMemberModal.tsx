import { useEffect } from "react";
import { Group } from "../../../../../Models/FamilyGroups/Group.Model";
import MemberRegisterForm from "./MemberRegisterForm";
import { Button, Modal } from "react-bootstrap";
import { NewMember } from "../../../../../Services/SharingData/NewRegister.Service";

interface CreateMemberModalProps {
    group : Group
    modalState : boolean
    setModalState :  React.Dispatch<React.SetStateAction<boolean>>
}

function CreateMemberModal({ group, modalState, setModalState }: CreateMemberModalProps) {

    const subscription = NewMember.getSubject();
    const handleClose = () => setModalState(false);

    useEffect (() => {
        subscription.subscribe(() => {
            handleClose();
        });
    });

    return (
        <Modal show={modalState} onHide={handleClose}>
            <MemberRegisterForm group={group} >
            <div style = {{marginTop : 30}} className="text-center">
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit">
                    Agregar miembro
                </Button>
            </div>
            </MemberRegisterForm>
        </Modal>     
    )
}

export default CreateMemberModal