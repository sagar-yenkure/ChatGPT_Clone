import { createSlice} from "@reduxjs/toolkit";

type modal = { modal: boolean ,sidenav:boolean };

const initialState:modal = {
  modal: false,
  sidenav:true
};

export const modalslice = createSlice({
  name: "modal",

  initialState,

  reducers: {
    // to open modal
    modalopen: (state, action) => {
      state.modal = action.payload;
    },
    // to close modal
    modalclose: (state, action) => {
      state.modal = action.payload;
    },
// to open the sidenav
    sidenavopen:(state,action)=>{
      state.sidenav=action.payload
    },
    //to close the side nav
    sidenavclose:(state,action)=>{
      state.sidenav=action.payload
    },

  },
});

export const { modalopen, modalclose , sidenavclose , sidenavopen } = modalslice.actions;

export default modalslice.reducer;
