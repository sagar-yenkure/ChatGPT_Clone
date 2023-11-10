import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: any = {
  chat: []
};

export const chatsclice = createSlice({
  name: "chat",
  initialState,

  reducers: {
    createchat:(state, action) => {
      const newchat = {
        id: nanoid(),
        prompt: action.payload.command,
        responce: action.payload.data,
      };
      state.chat.push(newchat);
    },
  },
});

export const { createchat } = chatsclice.actions;
export default chatsclice.reducer;
