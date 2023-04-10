import { Request, Response, NextFunction } from "express";
import { findAllWorks } from "@service/works.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const works = await findAllWorks()

        const mapped = works.map(work => {
            return {
                id: work.id,
                title: work.title,
                description: work.description,
                source: work.source,
                image: work.img
            }
        })

        res.status(200).json({
            message: "Retrive ALL Works",
            works: mapped
        })

    } catch (error) {
        next(error)
    }

}