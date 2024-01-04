import { asyncHandler } from "../asynchandler.js"
import { User } from "../modals/usermodal.js"
import axios from "axios";
import bcrypt from "bcrypt"

// controller to send prompt
const askprompt = asyncHandler(async (req, res) => {
    const { prompt } = req.body;

    if (prompt == null) {
        throw new Error("Uh oh,no prompt was provided");
    }

    const options = {
        method: 'POST',
        url: 'https://chatgpt-gpt4-5.p.rapidapi.com/ask',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '8f5cdf5ff7msh8edd93411f16817p1e9a99jsn0be516c83678',
            'X-RapidAPI-Host': 'chatgpt-gpt4-5.p.rapidapi.com'
        },
        data: {
            query: prompt
        }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data.response);
        return res.status(200).json({
            success: true,
            responce: (response.data.response)
        });
    } catch (error) {
        console.error(error);
    }

})

// controlller to login
const Login = asyncHandler(async (req, res) => {

    try {

        const { email, password } = req.body
        let success = false
        if (!email) {
            success = false
            return res.status(300).json({ error: "email required" })
        }
        const isuser = await User.findOne({ email })
        if (!isuser) {
            success = false
            return res.status(400).json({ error: "user not found" })
        }

        const compare = await bcrypt.compare(password, isuser.password)

        if (!compare) {
            success = false
            return res.status(400).json({ error: "password is wrong" })
        }
        const token = await isuser.generateToken()

        const options = {
            httpOnly: true,
            secure: true
        }


        success = true
        return res
            .cookie("token", token, options)
            .status(200).
            json({ success, token, message: "user succesfully logged" })

    } catch (error) {
        res.status(500).send("Server ISSUE")
        console.log(error)


    }

})

// controller to register
const Register = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    let success = false
    try {
        let user = await User.findOne({ email });
        if (user) {
            success = false

            return res.status(400).json({ success, error: `User "${email}" alredy exits, Please Login` })
        }
        user = await User.create({
            email: email,
            password: password
        })
        success = true
        res.json({ success, message: "user created succesfullly | please login" })
    }

    catch (error) {
        res.status(500).send("Server ISSUE")
        console.log(error)

    }
})

//controller to change password
const Chanagepassword = asyncHandler(async (req, res) => {

   try {
     const { oldPassword, newPassword } = req.body
     const theuser = await User.findById(req.user._id)
     if (!theuser) {
         return res.status(400).json({ error: "user not found" })
     }
     const ispasswordCorrect = await bcrypt.compare(oldPassword, theuser.password)
     if (!ispasswordCorrect) {
         return res.status(400).json({ error: "password is invalid" })
     }
 
     theuser.password = newPassword
     await theuser.save({ validateBeforeSave: false })
     
     return res.status(200).json({ error: "password changed Succesfuly" })

   } catch (error) {
    console.log(error)
 return res.status(500).json({ error: "Server error while changing password" })
    
   }


})

export {
    askprompt,
    Login,
    Register,
    Chanagepassword
}