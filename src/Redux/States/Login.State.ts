import { createSlice } from "@reduxjs/toolkit";
import { clearStorageData, setStorageData } from "../../Utilities/LocalStorageHandler";
import { LogInState } from "../../Models/Auth/LoggedUser.Model";


export const NotLoggedUser: LogInState = {
    isLogged: false,
}

export const LoggedUser: LogInState = {
    isLogged: true,
}


const LoginKey = 'isLogged';

export const loginSlice = createSlice({
    name: LoginKey,
    initialState: localStorage.getItem(LoginKey) ? JSON.parse(localStorage.getItem(LoginKey) as string) : NotLoggedUser,
    reducers : {
        logIn: () => {
            setStorageData<LogInState>(LoginKey, LoggedUser);
            return LoggedUser;
        },
        logOut: () => {
            clearStorageData(LoginKey);
            return NotLoggedUser;
        }
    } 
});

export const {logIn, logOut} = loginSlice.actions;
export default loginSlice.reducer;