import { Request, Response, NextFunction } from "express";
import { removeComment, findComment } from "@service/comments.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const id = +req.params.id

        const find = await findComment(id)

        if (!find) {
            return res.status(400).json({
                message: `There's no Comment with this ${id}`
            })
        }

        const remove = await removeComment(id)

        return res.status(200).json({
            message: "Comment remove",
            comment: {
                id: remove.id,
                email: remove.email,
                comment: remove.comment,
                blogId: remove.blogsId
            }
        })

    } catch (error) {
        next(error)
    }
}