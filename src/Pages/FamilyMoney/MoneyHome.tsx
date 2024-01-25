import { Route } from "react-router-dom"
import Logout from "../../Components/Logout/Logout"
import NavbarCustomer from "../../Components/Navbar/NavbarCustomer"
import RoutesNotFound from "../../Components/StatusCode/RoutesNotFound"
import { PrivateRoutes } from "../../Routes/Private.Routes"
import FamilyGroups from "./Components/FamilyGroups/FamilyGroups"
import Members from "./Components/Members/Members"
import Budgets from "./Components/Budgets/Budgets"
import Dashboard from "./Components/Dashboard/Dashboard"
import { useEffect } from "react"
import { useGroupsContext } from "./Context/FamilyGroups/Groups.Context"
import { getFamilyGroups } from "../../Services/FamilyGroups/Groups.Service"
import { Group } from "../../Models/FamilyGroups/Group.Model"
import { Button } from "react-bootstrap"
import MoneyRegister from "./Components/MoneyRegister/MoneyRegister"
import Expenses from "./Components/Expenses/Expenses"
import Payment from "./Components/Payments/PaymentBudgets"


function MoneyHome() {

  const {setGroups, groups} = useGroupsContext(); 

  const fetchGroups = async () => {
    const result: Group[] = await getFamilyGroups();
    return result;
  }

  const testGroups = () => {
    console.log(groups);
    
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
        <h1>MoneyHome</h1>
        <Button onClick={testGroups}>Pruebita</Button>
        <Logout></Logout>
        <RoutesNotFound>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path={PrivateRoutes.GROUPS} element={<FamilyGroups/>}></Route>
            <Route path={PrivateRoutes.MEMBERS} element={<Members/>}></Route>
            <Route path={PrivateRoutes.MONEY_REGISTER} element={<MoneyRegister/>}></Route>
            <Route path={PrivateRoutes.BUDGET} element={<Budgets/>}></Route>
            <Route path={PrivateRoutes.EXPENSES} element={<Expenses/>}></Route>
            <Route path={PrivateRoutes.PAYMENT} element={<Payment/>}></Route>
        </RoutesNotFound>
    </div>
  )
}
export default MoneyHome