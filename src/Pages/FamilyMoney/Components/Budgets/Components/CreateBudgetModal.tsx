import { Button, Modal } from "react-bootstrap";
import BudgetRegisterForm from "./BudgetRegisterForm";


interface CreateBudgetModalProps {
    periodId : number,
    modalState : boolean
    setModalState :  React.Dispatch<React.SetStateAction<boolean>>
}

function CreateBudgetModal({ periodId, modalState, setModalState }: CreateBudgetModalProps) {

    const handleClose = () => setModalState(false);
    
    return (
        <Modal show={modalState} onHide={handleClose}>
            <BudgetRegisterForm periodId={periodId} >
            <div style = {{marginTop : 30}} className="text-center">
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit">
                    Agregar miembro
                </Button>
            </div>
            </BudgetRegisterForm>
        </Modal>     
    )
}
export default CreateBudgetModal