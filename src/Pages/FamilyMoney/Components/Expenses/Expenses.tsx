import { useParams } from "react-router-dom";
import { useGroupsContext } from "../../Context/FamilyGroups/Groups.Context";
import { GROUP_TYPES } from "../../../../Models/FamilyGroups/GroupType.Model";
import { filterGroupById, filterGroupByTypeId } from "../../../../Services/FamilyGroups/Groups.Service";
import { useEffect, useState } from "react";
import { Period } from "../../../../Models/Periods/Period.Model";
import { getPeriodsByGroupId } from "../../../../Services/Periods/Period.Service";
import { NewPeriod } from "../../../../Services/SharingData/NewRegister.Service";
import { Button, Tab, Tabs } from "react-bootstrap";
import PeriodRegisterForm from "../Periods/Components/PeriodRegisterForm";
import PaymentExpenses from "../Payments/PaymentExpenses";
import ExpenseRegisterForm from "./Components/ExpenseRegisterForm";

function Expenses() {

  const { idGroup } = useParams(); 

  const notFoundGroupView = <> Grupo no encontrado </>;
  
  if (idGroup){

    const {groups} = useGroupsContext();   

    const groupExpenses = filterGroupByTypeId(groups, GROUP_TYPES.EXPENSE_ID);
    const group = filterGroupById(groupExpenses, idGroup);
    if(group == undefined) return (notFoundGroupView);

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
                  
                  {period.expenses?.map((expense) => (
                    <ol>
                      <li>{expense.expenseName}</li>
                      <li>{expense.category}</li>
                      <li>{expense.expense}</li>
                    </ol>
                  ))
                   
                  }
                </ul>
                <ExpenseRegisterForm periodId={period.id} />
              </div>
               
           
            ))}
          </Tab>
          
          <Tab eventKey="payments" title="Pagos">
            {/* <PaymentExpenses group={group} periods={periods} /> */}
            <PaymentExpenses group={group} periods={periods}></PaymentExpenses>
          </Tab>
        </Tabs>
      </>
    )
  } else return(notFoundGroupView)
}
export default Expenses