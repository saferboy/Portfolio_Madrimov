import { Request, Response, NextFunction } from "express";
import { findAllHero } from "@service/hero.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const finds = await findAllHero()

        const mapped = finds.map(hero => {
            return {
                id:          hero.id,
                title:       hero.title,
                subtitle:    hero.subtitle,
                description: hero.description,
                image:       hero.img
            }
        })

        return res.status(200).json({
            hero: mapped
        })

    } catch (error) {
        next(error)
    }
}