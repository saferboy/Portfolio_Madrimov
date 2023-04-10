import { Router } from "express"
import { upload } from "@middleware/upload"

// import { authCheck } from "@middleware/auth-check"

import createWorks from "@controller/works/create-works"
import findAllWorks from "@controller/works/findAll-works"
import findOneWorks from "@controller/works/findOne-works"
import updateWorks from "@controller/works/update-works"
import removeWorks from "@controller/works/remove-works"

const router = Router()

    .post('/', upload.single('file'), createWorks)
    .get('/', findAllWorks)
    .get('/:id', findOneWorks)
    .patch('/:id', upload.single('file'), updateWorks)
    .delete('/:id', removeWorks)

export default router