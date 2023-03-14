import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';//secret shit in env
import userRoute from './routes/user.js'
import bodyParser from 'body-parser'
dotenv.config()

const app=Express() //localhost server
app.listen(process.env.PORT,()=>{
    console.log("express server up and running")})

app.get("/",(req,res)=>{
    res.send("motherfucker") 
})
//try-catch compulsory
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO)//link for .env
        console.log("connected to db")
    }
    catch(error){
        console.log("cannot connect")
    }
}
connect()


mongoose.set('strictQuery',false)
//middlewares
app.use(Express.json())
app.use("/user",userRoute)

app.use(bodyParser.json())