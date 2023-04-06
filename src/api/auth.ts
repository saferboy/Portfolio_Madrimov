import { Router } from "express"

import auth from "@controller/auth/auth.controller"
import update from "@controller/auth/update-login"

const router = Router()


    .post('/', auth)
    .patch('/', update)

export default router