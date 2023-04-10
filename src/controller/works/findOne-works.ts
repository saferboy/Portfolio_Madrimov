import { Request, Response, NextFunction } from "express";
import { findOneWorks } from "@service/works.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const id = +req.params.id

        const works = await findOneWorks(id)

        if (!works) {
            return res.status(400).json({
                message: `There's no Works with this ${id}`
            })
        }

        return res.status(200).json({
            message: "Works Retrive",
            works: {
                id: works.id,
                title: works.title,
                description: works.description,
                source: works.source,
                image: works.img
            }
        })

    } catch (error) {
        next(error)
    }

}