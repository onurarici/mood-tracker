import { configureStore } from "@reduxjs/toolkit";
import welcomeSlice from "./welcome-slice";
import daySlice from "./day-slice";

const store = configureStore({
    reducer:{
        welcome: welcomeSlice.reducer,
        day: daySlice.reducer
    }
})

export default store;