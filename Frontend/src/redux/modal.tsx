import { createSlice} from "@reduxjs/toolkit";

type modal = { modal: boolean ,sidenav:boolean ,send:boolean};

const initialState:modal = {
  modal: false,
  sidenav:true,
  send:false
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

    //to send or craete a new chat
    
    newchat:(state,action)=>{
      state.send=action.payload
    },
    closechat:(state,action)=>{
      state.send=action.payload
    },
  },
});

export const { modalopen, modalclose , sidenavclose , sidenavopen,newchat,closechat } = modalslice.actions;

export default modalslice.reducer;
