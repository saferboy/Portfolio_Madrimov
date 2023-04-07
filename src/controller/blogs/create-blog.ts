import { Request, Response, NextFunction } from "express";
import { createBlog } from "@service/blog.service";
import { BlogBody } from "@model/blog-model";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const blog: BlogBody = req.body

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.path

        const newBlog = await createBlog(blog, image)

        return res.status(200).json({
            message: "Blog Created",
            blog: {
                id: newBlog.id,
                title: newBlog.title,
                content:    newBlog.content,
                image:      image,
                likes: newBlog.likes,
                comments: newBlog.comments
            }
        })        

    } catch (error) {
        next(error)
    }

}