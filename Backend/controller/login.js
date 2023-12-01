import { asyncHandler } from "../asynchandler.js"
import { User } from "../modals/usermodal.js"
import bcrypt from "bcrypt"

const Login =asyncHandler(async(req,res)=>{

    try {
        
        const {email , password}=req.body
        let success = false
         if(!email){
             success = false
             return  res.status(300).json({error:"email required"})
            }
            const isuser = await User.findOne({email})
            if(!isuser){
                success = false
                return res.status(400).json({error:"user not found"})
            }
            
            const compare= await bcrypt.compare(password,isuser.password)

            if(!compare){
                success = false
                return res.status(400).json({error:"password is wrong"})
            }

            success=true
            return res.status(200).json({success,message:"user succesfully logged"})

        } catch (error) {
            res.status(500).send("Server ISSUE")
            console.log(error)
        
           
        }

})

export{Login}