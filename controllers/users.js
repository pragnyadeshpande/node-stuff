import User from "../models/User.js"
export const createUser=async(req,res)=>{//important
    const {username,password}=req.body
    const newUser=new User(req.body)//json file passed
    try{
        //const savedUser=await newUser.save()
        const savedUser=await User.create({username,password})
        res.status(200).json(savedUser)

    }
    catch(error){
        res.status(500).json(error)
    }
}