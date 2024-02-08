import { Button } from "react-bootstrap";
import { Group } from "../../../../Models/FamilyGroups/Group.Model"
import { Period } from "../../../../Models/Periods/Period.Model"
import PaymentBudgetsForm from "./Components/PaymentBudgetsForm";

interface PaymentTab {
  group : Group,
  periods : Period[]
}

function PaymentBudgets({group, periods}: PaymentTab) {

  return (
    <>
      <PaymentBudgetsForm key={group.id} periods={periods} group={group} >
      <div style = {{marginTop : 30}} className="text-center">
        <Button variant="primary" type="submit">
            Agregar miembro
        </Button>
      </div>
      </PaymentBudgetsForm>   
    </>
  )
}
export default PaymentBudgets