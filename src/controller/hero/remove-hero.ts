import { Request, Response, NextFunction } from "express";
import { removeHero, findOneHero } from "@service/hero.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const find = await findOneHero(id)

        if (!find) {
            return res.status(404).json({
                message: `No information was found for this ${id}`,
            })
        }

        const removed = await removeHero(id)

        return res.status(200).json({
            message: `Hero deleted this id ${id}`,
            hero: {
                id:     removed.id,
                title:  removed.title,
                subtitle:   removed.subtitle,
                description: removed.description,
                image:  removed.img
            }
        })

    } catch (error) {
        next(error)
    }

}