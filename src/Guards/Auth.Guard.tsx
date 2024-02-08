import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../Redux/Store";
import { PublicRoutes } from "../Routes/Public.Routes";
import { getCookie } from "../Utilities";

export const AuthGuard = () => {
    const authState = useSelector((store: AppStore) => store.loggedUser);
    return authState.isLogged && getCookie('jwtToken') ? <Outlet/> : <Navigate replace to={PublicRoutes.HOME}/>;
}

export default AuthGuard;