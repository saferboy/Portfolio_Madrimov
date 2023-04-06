import { Router } from "express";


import auth from "@controller/auth.controller"


const router = Router()

.post('/', auth)


export default router