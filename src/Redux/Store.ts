import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./States/User.State";
import { User } from "../Models/Users/User.Model";
import { LogInState } from "../Models/Auth/LoggedUser.Model";
import loginSliceReducer from "./States/Login.State";

export interface AppStore {
    user : User;
    loggedUser : LogInState;
}

export default configureStore<AppStore>({
    reducer : {
        user: userSliceReducer,
        loggedUser : loginSliceReducer
    }
})