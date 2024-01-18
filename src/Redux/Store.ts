import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./States/User.State";
import { User } from "../Models/Users/User.Model";
import { LoggedUser } from "../Models/Auth/LoggedUser.Model";
import loginSliceReducer from "./States/Login.State";

export interface AppStore {
    user : User;
    loggedUser : LoggedUser;
}

export default configureStore<AppStore>({
    reducer : {
        user: userSliceReducer,
        loggedUser : loginSliceReducer
    }
})