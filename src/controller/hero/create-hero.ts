import { Request, Response, NextFunction } from "express";
import { createHero } from "@service/hero.service";
import { HeroBody } from "@model/hero-model";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const hero: HeroBody = req.body

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.path

        const newHero = await createHero(hero, image)

        return res.status(200).json({
            message: "Hero Created",
            hero: {
                id:          newHero.id,
                title:       newHero.title,
                subtitle:    newHero.subtitle,
                description: newHero.description,
                img:         newHero.img
            }
        })
    } catch (error) {
        next(error)
    }
}