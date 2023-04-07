import { Router } from "express";

import login from "./auth"
import blog from "./blog"

const router = Router()

    .use('/login', login)
    .use('/blog', blog)

export default router