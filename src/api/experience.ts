import { Router } from "express"

// import { authCheck } from "@middleware/auth-check"

import createExperience from "@controller/experience/create-experience"
import findAllExperience from "@controller/experience/findAll-experience"


const router = Router()

    .post('/', createExperience)
    .get('/', findAllExperience)


export default router