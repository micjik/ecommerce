import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    address: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },

    role: {
        type: String,
        default: "user"
    },
    status: {
        type: Number,
        default: 0
    },

})

 userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
     const salt = bcrypt.genSalt(10)
     const hashed = bcrypt.hash(this.password, salt)
 })
 userSchema.methods.validPassword = async function(enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password)
 }

const User = mongoose.model("User", userSchema)
export default User