import { Button, Modal } from "react-bootstrap";
import { Group } from "../../../../../Models/FamilyGroups/Group.Model"
import PeriodRegisterForm from "./PeriodRegisterForm";

interface CreatePeriodModaProps {
    group : Group
    modalState : boolean
    setModalState :  React.Dispatch<React.SetStateAction<boolean>>
}

function CreatePeriodModal({group, modalState, setModalState} : CreatePeriodModaProps) {

    const handleClose = () => setModalState(false);

  return (
    <Modal show={modalState} onHide={handleClose}>
        <PeriodRegisterForm groupId={group.id} >
            <div style = {{marginTop : 30}} className="text-center">
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit">
                    Agregar periodo
                </Button>
            </div>
        </PeriodRegisterForm>
    </Modal>   
  )
}
export default CreatePeriodModal