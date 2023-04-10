import { Router } from "express"

// import { authCheck } from "@middleware/auth-check"

import createExperience from "@controller/experience/create-experience"
import findAllExperience from "@controller/experience/findAll-experience"
import updateExperience from "@controller/experience/update-experience"
import removeExperience from "@controller/experience/remove-experience"

const router = Router()

    .post('/', createExperience)
    .get('/', findAllExperience)
    .patch('/:id', updateExperience)
    .delete('/:id', removeExperience)

export default router