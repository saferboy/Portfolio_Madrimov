import { Request, Response, NextFunction } from "express";
import { createExperience } from "@service/experience.service";
import { ExperinceDto } from "@model/experince-model";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const data: ExperinceDto = req.body

        const newBody = await createExperience(data)

        return res.status(200).json({
            message: "Experience Created",
            experience: {
                id: newBody.id,
                year: newBody.year,
                description: newBody.description
            }
        })

    } catch (error) {
        next(error)
    }

}