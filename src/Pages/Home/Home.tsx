import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../Routes/Public.Routes";

function Home() {

    const navigate = useNavigate();

    const redirectToLogin = () => {
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
    }

    const redirectUserRegister = () => {
        navigate(`/${PublicRoutes.USER_REGISTER}`, {replace: true})
    }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={redirectToLogin}>Iniciar sesión</button>
        <button onClick={redirectUserRegister}>Registrarse</button>
    </div>
  )
}
export default Home