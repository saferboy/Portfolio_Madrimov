import { Request, Response, NextFunction } from "express";
import { updateBlog,findOneBlog } from "@service/blog.service";
import { BlogBody } from "@model/blog-model";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const blog: BlogBody = req.body

        const find = await findOneBlog(id)

        if (!find) {
            return res.status(400).json({
                message:    `There is no information available for this ${id}`
            })
        }
        
        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }
        
        const image = req.file.filename

        const newBlog = await updateBlog(id, blog, image)

        return res.status(200).json({
            message: `The blog has been updated for this ${id}`,
            blog: {
                id: newBlog.id,
                title: newBlog.title,
                content: newBlog.content,
                image:  image
            }
        })

    } catch (error) {
        next(error)
    }

}