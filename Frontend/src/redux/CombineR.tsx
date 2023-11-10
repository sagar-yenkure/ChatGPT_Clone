import { combineReducers } from "@reduxjs/toolkit";

import modal_reducer from "./modal"
import chat_reducer from "./Chatslice"

export default combineReducers({
    modal_reducer,
    chat_reducer
})