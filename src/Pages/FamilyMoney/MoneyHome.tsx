import { Route } from "react-router-dom"
import NavbarCustomer from "../../Components/Navbar/NavbarCustomer"
import RoutesNotFound from "../../Components/StatusCode/RoutesNotFound"
import { PrivateRoutes } from "../../Routes/Private.Routes"
import FamilyGroups from "./Components/FamilyGroups/FamilyGroups"
import Members from "./Components/Members/Members"
import Dashboard from "./Components/Dashboard/Dashboard"
import { useEffect } from "react"
import { useGroupsContext } from "./Context/FamilyGroups/Groups.Context"
import { getFamilyGroups } from "../../Services/FamilyGroups/Groups.Service"
import { Group } from "../../Models/FamilyGroups/Group.Model"
import MoneyRegister from "./Components/MoneyRegister/MoneyRegister"
import Expenses from "./Components/Expenses/Expenses"
import ValidateBudgetGroup from "../../Components/Utilities/ValidateBudgetGroup"


function MoneyHome() {

  const {setGroups} = useGroupsContext(); 

  const fetchGroups = async () => {
    const result: Group[] = await getFamilyGroups();
    return result;
  }


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGroups();
      setGroups(data);
    };
  
    fetchData();
  }, []);

  return (
    <div>
        <NavbarCustomer/>
        <RoutesNotFound>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path={PrivateRoutes.GROUPS} element={<FamilyGroups/>}></Route>
            <Route path={PrivateRoutes.MEMBERS} element={<Members/>}></Route>
            <Route path={PrivateRoutes.MONEY_REGISTER} element={<MoneyRegister/>}></Route>
            <Route path={PrivateRoutes.BUDGET} element={<ValidateBudgetGroup/>}></Route>
            <Route path={PrivateRoutes.EXPENSES} element={<Expenses/>}></Route>
        </RoutesNotFound>
    </div>
  )
}
export default MoneyHome