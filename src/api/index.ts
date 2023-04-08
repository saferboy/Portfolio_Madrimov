import { Router } from "express";

import login from "./auth"
import blog from "./blog"
import comment from "./comment"
import like from "./likes"

const router = Router()

    .use('/login', login)
    .use('/blog', blog)
    .use('/comment', comment)
    .use('/like', like)

export default router