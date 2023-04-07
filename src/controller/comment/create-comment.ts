import { Request, Response, NextFunction } from "express";
import { createComment } from "@service/comments.service";
import { CommentBody } from "@model/coments-model";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const comment: CommentBody = req.body

        const newComment = await createComment(id, comment)

        return res.status(200).json({
            data: {
                id:     newComment.id,
                email:  newComment.email,
                comment:newComment.comment,
                blogId  :newComment.blogsId
            }
        })

    } catch (error) {
        next(error)
    }

}