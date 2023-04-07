import { Request, Response, NextFunction } from "express";
import { getAllBlog } from "@service/blog.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const blogs = await getAllBlog()

        const mapped = blogs.map(blog => {
            return {
                id:         blog.id,
                title:      blog.title,
                content:    blog.content,
                image:      blog.img,
                likes:      blog.likes,
                comments:   blog.comments
            }
        })

        res.status(200).json({
            message: "All Blogs",
            Blogs: mapped
        })

    } catch (error) {
        next(error)
    }

}