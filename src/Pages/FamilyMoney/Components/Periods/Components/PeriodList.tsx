import { Button, ButtonGroup, Table } from "react-bootstrap"
import { Period } from "../../../../../Models/Periods/Period.Model"
import CreateBudgetModal from "../../Budgets/Components/CreateBudgetModal"
import { useState } from "react"

interface PeriodListProps {
  periods : Period[]
}

function PeriodList({periods} : PeriodListProps) {

  const [modalState, setModalState] = useState(false);

  const openModal = () => setModalState(true);

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre de periodo</th>
        <th>Fecha inicial</th>
        <th>Fecha final</th>
        <th>Porcentaje destinado</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {periods.map((period: Period) => (
        <tr key={period.id}>
          <td>{period.id}</td>
          <td>{period.periodName}</td>
          <td>{period.startDate}</td>
          <td>{period.endDate}</td>
          <td>0 %</td>
          <td className="text-center">
            <ButtonGroup>
              <Button variant="primary" onClick={openModal}>
                Agregar presupuesto
              </Button>
              <Button variant="secondary">Ver presupuestos</Button>
            </ButtonGroup>
          </td>
          <CreateBudgetModal modalState={modalState} setModalState={setModalState} periodId={period.id} />
        </tr>
        
      ))}
    </tbody>
  </Table>
  )
}
export default PeriodList