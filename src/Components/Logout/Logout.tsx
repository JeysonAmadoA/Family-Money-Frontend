import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/States/Login.State";
import { resetUser } from "../../Redux/States/User.State";
import { Button } from "react-bootstrap";

function Logout() {

    const dispatch = useDispatch();

    const logOutUser = () => {
      dispatch(logOut());
      dispatch(resetUser());
    } 

  return (
    <>
        <Button onClick={logOutUser}>
            Cerrar sesión
        </Button>
    </>
  )
}

export default Logout