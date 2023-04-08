import { Request, Response, NextFunction } from "express";
import { findComment } from "@service/comments.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        const id = +req.params.id
        const find = await findComment(id)

        if(!find) {
            return res.status(400).json({
                message: `There's no Part with this ${id}`
            })
        }

        return res.status(200).json({
            message: "Comment find",
            
        })
    } catch (error) {
        next(error)
    }

}