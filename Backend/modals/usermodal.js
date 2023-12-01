import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcyprt from "bcrypt"

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

export const User = mongoose.model("User", userScheama)
