import { Request, Response, NextFunction } from "express";
import { removeLike, findLike } from "@service/likes.service";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = +req.params.id

        const find = await findLike(id)

        if (!find) {
            return res.status(400).json({
                message: `There's no Like with this ${id}`
            })
        }

        const remove = await removeLike(id)

        return res.status(200).json({
            message: "Removed",
            id:     remove.id,
            uid:    remove.uid,
            blogId: remove.blogsId
        })

    } catch (error) {
        next(error)
    }
}