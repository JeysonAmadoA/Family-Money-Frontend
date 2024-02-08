import { getPeriodsByGroupId} from "../../../../Services/Periods/Period.Service";
import { Period } from "../../../../Models/Periods/Period.Model";
import { useEffect, useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { NewPeriod } from "../../../../Services/SharingData/NewRegister.Service";
import PaymentBudgets from "../Payments/PaymentBudgets";
import CreatePeriodModal from "../Periods/Components/CreatePeriodModal";
import { Group } from "../../../../Models/FamilyGroups/Group.Model";
import PeriodList from "../Periods/Components/PeriodList";

interface BudgetsProps {
  group : Group
}

function Budgets({group} : BudgetsProps) {
  
    const [periods, setPeriods] = useState<Period[]>([]);
    const [modalState, setModalState] = useState(false);
    
  
    const fetchPeriods = async (groupId:number) => {
      const result : Period[] = await getPeriodsByGroupId(groupId);
      return result;
    }
  
    const openModal = () => setModalState(true);
  
    useEffect(() => {
  
      const getPeriodData = async () => {
          const periodsData = await fetchPeriods(group.id);
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
            <Button onClick={openModal}>Agregar periodo</Button> 
            <CreatePeriodModal group={group} modalState={modalState} setModalState={setModalState} />
            <PeriodList periods={periods}></PeriodList>
          </Tab>
          
          <Tab eventKey="payments" title="Pagos">
            <PaymentBudgets group={group} periods={periods} />
          </Tab>
        </Tabs>
      </>
    )
}
export default Budgets;