import { createSlice } from "@reduxjs/toolkit";

const daySlice = createSlice({
    name: 'day',
    initialState: {counter: 1},
    reducers: {
        increase(state){
            state.counter++;
        },
        
    }
});

export const dayActions = daySlice.actions;

export default daySlice;


