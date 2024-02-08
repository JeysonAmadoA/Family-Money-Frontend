import { useState } from "react";
import { useGroupsContext } from "../../Context/FamilyGroups/Groups.Context"
import GroupRegisterForm from "./Components/GroupRegisterForm";
import NotRegisterGroups from "./Components/NotRegisterGroups";
import DefaultGroupsView from "./Components/DefaultGroupsView";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

function FamilyGroups() {

  const [formActive, setFormActive] = useState(false);
  const {groups} = useGroupsContext();

  const hasGroups  = groups.length > 0
  
  return (
    <div>
      {hasGroups 
      ? <DefaultGroupsView/> 
      : formActive 
        ?  
          <div>
            <Button style={{marginLeft : "20px", marginTop: "20px"}} onClick={() => setFormActive(false)}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} /> Volver
            </Button>
            <GroupRegisterForm>
              <div className="text-center">
                      <Button type="submit">Crear grupo</Button>
              </div>
            </GroupRegisterForm>
          </div> 
        : <NotRegisterGroups setFormActive={setFormActive}/>
      }
      
      
    </div>
  )
}

export default FamilyGroups