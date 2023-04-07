import { Router } from "express"

// import { authCheck } from "@middleware/auth-check"

import createComment from "@controller/comment/create-comment"

const router = Router()

    .post('/:id', createComment)

export default router