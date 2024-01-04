import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcyprt from "bcrypt"
import jwt from "jsonwebtoken"

const userScheama =  new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        }
    }, {
    timestamps: true
})

userScheama.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcyprt.hash(this.password,10)
    next()
})

userScheama.methods.generateToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User", userScheama)
