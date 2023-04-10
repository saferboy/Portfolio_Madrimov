import { Request, Response, NextFunction } from "express";
import { findOneHero } from "@service/hero.service";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id

        const find = await findOneHero(id)

        if (!find) {
            return res.status(400).json({
                message: `There's no Hero with this ${id}`
            })
        }

        return res.status(200).json({
            message: "Retrive Hero",
            hero: {
                id: find.id,
                title: find.title,
                subtitle: find.subtitle,
                description: find.description,
                image: find.img
            }
        })

    } catch (error) {
        next(error)
    }

}