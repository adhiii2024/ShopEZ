import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    phone:{
        type: String,
        required:true,
    },
    address:{
        type: String,
        required:true,
    },

    answer:{
        type:String,
        required:true,
    },
    role:{
        type: Number,
        default:0,
    },

},{timeStamps:true}) // timeStamp is used as when an user is created the time on which user is created will be recorded

export default mongoose.model('users',userSchema);