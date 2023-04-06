import { Router } from "express";
const router = Router()

//versions
import v1 from "./index"

//router
router.use('/', v1)

export default router