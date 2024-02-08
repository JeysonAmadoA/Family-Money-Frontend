import { Button } from "react-bootstrap"
import "./NotRegisterGroups.css"

interface NotRegisterGroupsProps {
    setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function NotRegisterGroups({setFormActive} : NotRegisterGroupsProps) {

  return (
    <div className="noRegisterGroups">
        <span>No tiene grupos registrados</span>
        <Button onClick={() => setFormActive(true)}>Agregar primer grupo</Button>
    </div>
  )
}
export default NotRegisterGroups