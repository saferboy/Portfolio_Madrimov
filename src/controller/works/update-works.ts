import { Request, Response, NextFunction } from "express";
import { updateWorks, findOneWorks } from "@service/works.service";
import { Works } from "@model/works-model";

export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id

        const work: Works = req.body

        const find = await findOneWorks(id)

        if (!find) {
            return res.status(400).json({
                message: `There is no information available for this ${id}`
            })
        }

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.filename

        const newWork = await updateWorks(id, work, image)

        return res.status(200).json({
            message: `Your work has been updated for this ${id}`,
            works: {
                id: newWork.id,
                title: newWork.title,
                description: newWork.description,
                source: newWork.source,
                image: newWork.img
            }
        })

    } catch (error) {
        next(error)
    }

}