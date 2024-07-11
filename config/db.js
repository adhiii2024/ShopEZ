import mongoose from "mongoose";
const connectDB =async()=>{
    try{
        const  conn = await mongoose.connect(process.env.MongoDB_URL)
        console.log(`Connected to mongoDB Database ${conn.connection.host}`)

    } catch(error){
        console.log(`error in mongoDB ${error}`)
    }
}

export default connectDB;