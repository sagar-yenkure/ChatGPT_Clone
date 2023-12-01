import { Router } from "express";
import { askprompt } from "../controller/ask.js";
import { Register } from "../controller/register.js";
import { Login } from "../controller/login.js";

const router = Router();

router.route("/ask").post(askprompt)

router.route("/register").post(Register)

router.route("/login").post(Login)


export default router