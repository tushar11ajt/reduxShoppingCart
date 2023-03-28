import { configureStore } from "@reduxjs/toolkit";
import UserSlice, { loginFormUserData, themeSliceChecker, user2Data } from "../Slice/UserSlice";


const store = configureStore({
    reducer: {
        users: UserSlice,
        user2: user2Data, 
        loginData: loginFormUserData

    }
})




export default store;

