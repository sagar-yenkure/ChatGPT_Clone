import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: any = {
  chatsummery:[]
};

export const chatsummeryslice = createSlice({
  name: "chatsummery",
  initialState,
  reducers: {
    createchatsummery:(state, action) => {
      const newchatsummery = {
        id: nanoid(),
        prompt: action.payload
      };
      state.chatsummery.push(newchatsummery);
    },
  },
});

export const { createchatsummery } = chatsummeryslice.actions;
export default chatsummeryslice.reducer;
