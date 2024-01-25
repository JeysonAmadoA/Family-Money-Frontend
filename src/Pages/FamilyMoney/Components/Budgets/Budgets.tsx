import { useParams } from "react-router-dom";
import { useGroupsContext } from "../../Context/FamilyGroups/Groups.Context";
import { filterGroupById, filterGroupByTypeId } from "../../../../Services/FamilyGroups/Groups.Service";
import { GROUP_TYPES } from "../../../../Models/FamilyGroups/GroupType.Model";
import { getPeriodsByGroupId} from "../../../../Services/Periods/Period.Service";
import { Period } from "../../../../Models/Periods/Period.Model";
import { useEffect, useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { NewPeriod } from "../../../../Services/SharingData/NewRegister.Service";
import PeriodRegisterForm from "../Periods/PeriodRegisterForm";
import BudgetRegisterForm from "./Components/BudgetRegisterForm";
import PaymentBudgets from "../Payments/PaymentBudgets";


function Budgets() {

  const { idGroup } = useParams(); 

  const notFoundGroupView = <> Grupo no encontrado </>;
  
  if (idGroup){

    const {groups} = useGroupsContext();   

    const groupBudgets = filterGroupByTypeId(groups, GROUP_TYPES.BUDGET_ID);
    const group = filterGroupById(groupBudgets, idGroup);
    if(group == undefined){
      return (notFoundGroupView);
    }

    const groupId = parseInt(idGroup);
  
    const [periods, setPeriods] = useState<Period[]>([]);
    const [showForm, setShowForm] = useState(false);
    
  
    const fetchPeriods = async (groupId:number) => {
      const result : Period[] = await getPeriodsByGroupId(groupId);
      return result;
    }
  
    const handleFormPeriod = () => setShowForm(!showForm);
    
  
    useEffect(() => {
  
      const getPeriodData = async () => {
          const periodsData = await fetchPeriods(groupId);
          setPeriods(periodsData);
      }
  
      getPeriodData();
  
      const subscription = NewPeriod.getSubject();
      subscription.subscribe(() => {
        getPeriodData();
      });
      
    }, []);
  
  
    
    return (
      <>
        <Tabs
          defaultActiveKey="periods"
          id="uncontrolled-tab-example"
          className="mb-3">
          <Tab eventKey="periods" title="Periodos">
            <h3>Presupuesto - {group.groupName}</h3>
            <Button onClick={handleFormPeriod}>Agregar periodo</Button> 
            <PeriodRegisterForm formVisible={showForm} groupId={group.id}  />
        
            {periods.map((period: Period) => (
              <div key={`period_${period.id}`}>
                <ul key={period.id}>  
                  <li>{period.id}</li>
                  <li>{period.periodName}</li>
                  <li>{period.startDate}</li>
                  <li>{period.endDate}</li>
                  
                  {period.budgets?.map((budget) => (
                    <ol>
                      <li>{budget.budgetName}</li>
                      <li>{budget.category}</li>
                      <li>{budget.percentage}</li>
                    </ol>
                  ))
                   
                  }
                </ul>
                <BudgetRegisterForm periodId={period.id}></BudgetRegisterForm>
              </div>
               
           
            ))}
          </Tab>
          
          <Tab eventKey="payments" title="Pagos">
            <PaymentBudgets group={group} periods={periods} />
          </Tab>
        </Tabs>
      </>
    )
  } else return(notFoundGroupView)

}
export default Budgets