import { createSlice } from "@reduxjs/toolkit";

const welcomeSlice = createSlice({
    name: 'welcome',
    initialState: {isLoggedIn: false},
    reducers: {
        logIn(state){
            state.isLoggedIn = true;
        },
        logOut(state){
            state.isLoggedIn = false;
        }
    }
});

export const welcomeActions = welcomeSlice.actions;

export default welcomeSlice;