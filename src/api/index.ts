import { Router } from "express";

import login from "./auth"
import blog from "./blog"
import comment from "./comment"

const router = Router()

    .use('/login', login)
    .use('/blog', blog)
    .use('/comment', comment)

export default router