import { useParams } from "react-router-dom";
import Budgets from "../../Pages/FamilyMoney/Components/Budgets/Budgets";
import { useGroupsContext } from "../../Pages/FamilyMoney/Context/FamilyGroups/Groups.Context";
import { GROUP_TYPES } from "../../Models/FamilyGroups/GroupType.Model";
import { filterGroupById, filterGroupByTypeId } from "../../Services/FamilyGroups/Groups.Service";
import { Group, emptyGroup } from "../../Models/FamilyGroups/Group.Model";

function ValidateBudgetGroup() {

    const {groups} = useGroupsContext();  
    const { idGroup } = useParams(); 
    let groupNotFound = false;
    let group : Group = emptyGroup;
    
    if(idGroup === undefined){
        groupNotFound = true;
    } else {
        const groupBudgets = filterGroupByTypeId(groups, GROUP_TYPES.BUDGET_ID);
        const groupFound = filterGroupById(groupBudgets, idGroup);
        
        if (groupFound === undefined){
            groupNotFound = true;
        } else {
            group = groupFound;
        }
    }


  return (
    <> {groupNotFound ? <h1>Grupo no encontrado</h1> : <Budgets group={group} />}</>
    
  )
}
export default ValidateBudgetGroup