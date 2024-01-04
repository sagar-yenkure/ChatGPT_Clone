import { Router } from "express";
import { Chanagepassword, Login, Register, askprompt } from "../controller/user.controller.js";
import verifyToken from "../middleware/user.auth.js";



const router = Router();

router.route("/ask").post(askprompt)

router.route("/register").post(Register)

router.route("/login").post(Login)

router.route("/changePassword").patch(verifyToken,Chanagepassword)


export default router