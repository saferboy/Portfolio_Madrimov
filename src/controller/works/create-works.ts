import { Request, Response, NextFunction } from "express";
import { createWorks } from "@service/works.service";
import { Works } from "@model/works-model";


export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const data: Works = req.body

        if (!req.file) {
            return res.status(400).json({
                message: "File not upload"
            })
        }

        const image = req.file.filename

        const works = await createWorks(data, image)

        return res.status(200).json({
            message: "Create Works",
            works: {
                id: works.id,
                title:   works.title,
                description: works.description,
                source:  works.source,
                image: works.img
            }
        })

    } catch (error) {
        next(error)
    }
}