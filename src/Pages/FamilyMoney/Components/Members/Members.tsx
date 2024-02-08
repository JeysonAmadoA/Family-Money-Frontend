import { useGroupsContext } from "../../Context/FamilyGroups/Groups.Context"
import { sortElementsById } from "../../../../Utilities/GlobalHelpers";
import { Group } from "../../../../Models/FamilyGroups/Group.Model";
import MembersCard from "./Components/MembersCard";


export interface ModalStates {
  [groupId: number]: boolean;
}

function Members() {

  const {groups} = useGroupsContext();
  let hasGroups = groups.length > 0;

  const sortedGroups = sortElementsById(groups);
  
  return (
    <>
     {hasGroups &&
          sortedGroups.map((group : Group) => (
            <MembersCard key={group.id} group={group} />
      ))}
    </>
     
  )
}
export default Members