
import { asyncHandler } from "../asynchandler.js"
import { User } from "../modals/usermodal.js"

const Register = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    let success =false
    try {
        let user = await User.findOne({email});
        if (user) {
            success = false

          return res.status(400).json({  success, error: `User ${email} alredy exits, Please Login`})
        }
        user = await User.create({
            email: email,
            password: password
        })
        success = true
        res.json({ success ,user})
    } 

    catch (error) {
        res.status(500).send("Server ISSUE")
        console.log(error)

    }
})

export { Register }