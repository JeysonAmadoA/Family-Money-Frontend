import { Period } from "../../../../Models/Periods/Period.Model";

interface PeriodProps {
  periods : Period[]
}

function Period({periods} : PeriodProps) {

  

  return (
    <>
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
        {/* <BudgetRegisterForm periodId={period.id}></BudgetRegisterForm> */}
      </div>
    
   
    ))}
    </>
   
  )
}

export default Period