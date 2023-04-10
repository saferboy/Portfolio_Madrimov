import { Request, Response, NextFunction } from "express";
import { updateExperience, findOne } from "@service/experience.service";
import { ExperinceDto } from "@model/experince-model";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id

        const data: ExperinceDto = req.body

        const find = await findOne(id)

        if (!find) {
            return res.status(400).json({
                message: `There is no information available for this ${id}`
            })
        }

        const newBody = await updateExperience(id, data)

        return res.status(200).json({
            message: `The Experience has been updated for this ${id}`,
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
