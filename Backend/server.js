import {config} from "dotenv"
import express from "express"
import cors from 'cors'
// import OpenAI from 'openai';
import connectdb from "./database/db.js";
import router from "./Routes/router.js";
import cookieParser from "cookie-parser"

const app = express()
const port = 5000
app.use(express.json())
app.use(cors())
config()
connectdb()
app.use(cookieParser())
app.use("/api",router)



app.listen(port, () => {
  console.log(`-------server connected at ${port}--------`)
})
