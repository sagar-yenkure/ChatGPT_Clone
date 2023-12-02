import { createSlice } from "@reduxjs/toolkit";


const initialState:any={
    email:""
}

export const emailslice =createSlice({
    name:"email",
    initialState,

    reducers:{
        addmail:(state,action)=>{
            state.email=action.payload
        },
    },
})

export const {addmail} = emailslice.actions;
export default emailslice.reducer;