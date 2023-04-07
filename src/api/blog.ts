import { Router } from "express"
import { upload } from "@middleware/upload"
// import { authCheck } from "@middleware/auth-check"

import createBlog from "@controller/blogs/create-blog"
import findAllBlog from "@controller/blogs/findAll-blog"
import findOne   from   "@controller/blogs/findOne-blog"
import updateBlog from "@controller/blogs/update-blog"
import deleteBlog from "@controller/blogs/delete-blog"

const router = Router()

    .post('/', upload.single('file') ,createBlog)
    .get('/',  findAllBlog)
    .get('/:id', findOne)
    .patch('/:id',upload.single('file'), updateBlog)
    .delete('/:id', deleteBlog)

export default router