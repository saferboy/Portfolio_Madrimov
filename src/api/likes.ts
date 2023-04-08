import { Router } from "express"

// import { authCheck } from "@middleware/auth-check"

import createLike from "@controller/likes/create-like"
import removeLike from "@controller/likes/remove-like"

const router = Router()

    .post('/:id', createLike)
    .delete('/:id', removeLike)

export default router