import { configureStore } from "@reduxjs/toolkit";
import welcomeSlice from "./welcome-slice";

const store = configureStore({
    reducer:{
        welcome: welcomeSlice.reducer
    }
})

export default store;