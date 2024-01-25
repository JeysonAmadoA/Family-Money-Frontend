import { Button } from "react-bootstrap";
import { useGroupsContext } from "../../Context/FamilyGroups/Groups.Context";
import { Group } from "../../../../Models/FamilyGroups/Group.Model";
import { sortElementsById } from "../../../../Utilities/GlobalHelpers";
import { Link } from "react-router-dom";
import { GROUP_TYPES } from "../../../../Models/FamilyGroups/GroupType.Model";

function MoneyRegister() {

  const {groups} = useGroupsContext();
  const sortedGroups = sortElementsById(groups);

  return (
    <>
    <h2>Selecciona un grupo</h2>
        {sortedGroups.map((group:Group) => (
          <Link to={group.familyGroupType.typeId === GROUP_TYPES.BUDGET_ID ?`budget/${group.id}`:`expenses/${group.id}`} 
                key={group.id}>
            <Button variant="link"> {group.groupName} </Button>
          </Link>
        ))}
    </>
        
       
  )
}
export default MoneyRegister          
