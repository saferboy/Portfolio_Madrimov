import { Router } from "express"

// import { authCheck } from "@middleware/auth-check"

import createComment from "@controller/comment/create-comment"
import removeComment from "@controller/comment/remove-comment"

const router = Router()

    .post('/:id', createComment)
    .delete('/:id', removeComment)

export default router