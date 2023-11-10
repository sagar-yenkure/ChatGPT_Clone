import {configureStore } from "@reduxjs/toolkit";
import rootreducer from "./CombineR";

const store= configureStore ({
    reducer:rootreducer
});
  
export default store