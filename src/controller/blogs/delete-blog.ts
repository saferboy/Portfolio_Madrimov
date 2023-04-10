import { Request, Response, NextFunction } from "express";
import { deleteBlog, findOneBlog } from "@service/blog.service";

export default async (req: Request, res: Response, next: NextFunction) => { 

    try {
        
        const id = +req.params.id

        const find = await findOneBlog(id)
        
        if(!find) {
            return res.status(400).json({
                message: `No information was found for this ${id}`
            })
        }
        
        const blogs = await deleteBlog(id)
        
        return res.status(200).json({
            message: `This blog has been deleted based on this ${id}`,
            blog: {
                id: blogs.id,
                title: blogs.title,
                content:    blogs.content,
                image:  blogs.img
            }
        })

    } catch (error) {
        next(error)
    }

}