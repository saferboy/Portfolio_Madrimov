import { Router } from "express"
import { upload } from "@middleware/upload"

// import { authCheck } from "@middleware/auth-check"

import createHero from "@controller/hero/create-hero"
import findAllHero from "@controller/hero/findAll-hero"
import updateHero from "@controller/hero/update-hero"

const router = Router()

    .post('/', upload.single("file") ,createHero)
    .get('/', findAllHero)
    .put('/:id', upload.single("file"),  updateHero)

export default router