import { Router } from "express"

// import { authCheck } from "@middleware/auth-check"

import createExperience from "@controller/experience/create-experience"

const router = Router()

    .post('/', createExperience)

export default router