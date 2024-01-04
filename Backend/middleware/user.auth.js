import { asyncHandler } from "../asynchandler.js";
import jwt from "jsonwebtoken";
import { User } from "../modals/usermodal.js";

const verifyToken = asyncHandler(async (req, res,next) => {
    try {

        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            return res.status(400).json({ error: "Acess denied" })
        }

        const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(data._id).select("-passwors")
        if (!user) {
            return res.status(400).json({ error: "Invalid user" })
        }
        req.user = user
        next()

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "SERVER issue with auth" })

    }


})
 export default verifyToken