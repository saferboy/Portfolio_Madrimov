import { Request, Response, NextFunction } from "express";
import { updateHero, findOneHero } from "@service/hero.service";
import { HeroBody } from "@model/hero-model";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const id = +req.params.id

        const hero: HeroBody = req.body

        const find = await findOneHero(id)

        if (!find) {
            return res.status(400).json({
                message:    `There is no information available for this ${id}`
            })
        }

        if(!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.filename

        const newHero = await updateHero(id, hero, image)

        return res.status(200).json({
            message: `The Hero has been updated for this ${id}`,
            hero: {
                id:    newHero.id,
                title: newHero.title,
                description: newHero.description,
                subtitle: newHero.subtitle,
                image:    newHero.img 
            }
        })

    } catch (error) {
        next(error)
    }

}