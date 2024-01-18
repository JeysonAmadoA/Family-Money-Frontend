import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../Models/Users/User.Model";
import { clearStorageData, setStorageData } from "../../Utilities/LocalStorageHandler";


export const EmptyUserState: User = {
    id: 0,
    name : "",
    lastName: "",
    birthday: "",
    email: "",
    role: ""
}

const UserKey = 'user';

export const userSlice = createSlice({
    name: UserKey,
    initialState: localStorage.getItem(UserKey) ? JSON.parse(localStorage.getItem(UserKey) as string) : EmptyUserState,
    reducers : {
        setUser: (state, action) => {
            const result = action.payload;
            setStorageData<User>(UserKey, result);
            return result;
        },
        updateUser: (state, action) => {
            const result = action.payload;
            setStorageData<User>(UserKey, result);
            return {...state, ...result};
        },
        resetUser: () => {
            clearStorageData(UserKey);
            return EmptyUserState;
        }
    } 
});

export const {setUser, updateUser, resetUser} = userSlice.actions;
export default userSlice.reducer;