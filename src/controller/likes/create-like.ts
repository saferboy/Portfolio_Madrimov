import { Request, Response, NextFunction } from "express";
import { createLike } from "@service/likes.service";
import { LikesBody } from "@model/likes-model";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const like: LikesBody = req.body

        const newLike = await createLike(id, like)

        return res.status(200).json({
            data: {
                id: newLike.id,
                uid: newLike.uid,
                blogid: newLike.blogsId
            }
        })

    } catch (error) {
        next(error)
    }

}