import mongoose from "mongoose"
//database schema
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }    
})

export default mongoose.model("User",UserSchema)
