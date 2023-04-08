import { Request, Response, NextFunction } from "express";
import { findOneBlog} from "@service/blog.service";


export default async (req: Request, res: Response, next: NextFunction) => {
    
    try {
     
        const id = +req.params.id

        const blog = await findOneBlog(id)

        if (!blog) {
            return res.status(400).json({
                message: `There's no Blog with this ${id}`
            })
        }

        return res.status(200).json({
            message:"Unique Blog",
            blog: {
                id:     blog.id,
                title:  blog.title,
                content:    blog.content,
                img:    blog.img,
                likes:  blog.likes,
                comments:   blog.comments
            }
        })

    } catch (error) {
        next(error)
    }

}