import express from 'express'
import {createUser} from '../controllers/users.js'

const router=express.Router()

router.post("/create",createUser)//dena
export default router

