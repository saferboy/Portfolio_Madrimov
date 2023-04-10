import { Request, Response, NextFunction } from "express";
import { findAllExperience } from "@service/experience.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const finds = await findAllExperience()

        const mapped = finds.map(find => {
            return {
                id:     find.id,
                year:   find.year,
                description:  find.description
            }
        })

        return res.status(200).json({
            experience: mapped
        })

    } catch (error) {
        next(error)
    }

}