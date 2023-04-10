import { Request, Response, NextFunction } from "express";
import { removeExperience, findOne } from "@service/experience.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id =+req.params.id

        const find = await findOne(id)

        if (!find) {
            return res.status(404).json({
                message: `No information was found for this ${id}`,
            })
        }

        const removed = await removeExperience(id)

        return res.status(200).json({
            message: `Experience deleted this id ${id}`,
            experience: {
                id: removed.id,
                year:   removed.year,
                description:  removed.description
            }
        })

    } catch (error) {
        next(error)
    }

}