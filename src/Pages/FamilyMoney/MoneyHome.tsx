import { useDispatch } from "react-redux"
import { logOut } from "../../Redux/States/Login.State"
import { resetUser } from "../../Redux/States/User.State";

function MoneyHome() {

  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());
    dispatch(resetUser())
  } 


  return (
    <div>
      <h1>MoneyHome</h1>
      <button onClick={logOutUser}>Cerrar sesión</button>
    </div>
  )
}
export default MoneyHome