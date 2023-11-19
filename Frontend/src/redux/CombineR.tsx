import { combineReducers } from "@reduxjs/toolkit";

import modal_reducer from "./modal"
import chat_reducer from "./Chatslice"
import Summery_reducer from "./Summery";

export default combineReducers({
    modal_reducer,
    chat_reducer,
    Summery_reducer
})