import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { AppStore } from "../Redux/Store";
import { PublicRoutes } from "../Routes/Public.Routes";

export const AuthGuard = () => {
    const authState = useSelector((store: AppStore) => store.loggedUser);
    return authState.isLogged ? <Outlet/> : <Navigate replace to={PublicRoutes.HOME}/>;
}

export default AuthGuard;