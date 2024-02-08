import { Button, Modal } from "react-bootstrap"
import GroupRegisterForm from "./GroupRegisterForm"

interface CreateGroupModalProps {
    modalState : boolean
    setModalState :  React.Dispatch<React.SetStateAction<boolean>>
}

function CreateGroupModal({modalState, setModalState}: CreateGroupModalProps) {

    const handleClose = () => setModalState(false); 

  return (
    <Modal show={modalState} onHide={handleClose}>
            <GroupRegisterForm >
            <div style = {{marginTop : 30}} className="text-center">
                <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                <Button type="submit">Crear grupo</Button>
            </div>
            </GroupRegisterForm>
    </Modal>     
  )
}
export default CreateGroupModal