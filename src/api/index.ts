import { Router } from "express";

import login from "./auth"


const router = Router()

    .use('/login', login)


export default router