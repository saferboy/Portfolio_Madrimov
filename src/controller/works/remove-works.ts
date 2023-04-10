import { Request, Response, NextFunction } from "express";
import { deleteWorks, findOneWorks } from "@service/works.service";


export default async (req: Request, res: Response, next: NextFunction) => { 

    try {
        
        const id = +req.params.id

        const find = await findOneWorks(id)
        
        if(!find) {
            return res.status(400).json({
                message: `No information was found for this ${id}`
            })
        }
        
        const works = await deleteWorks(id)
        
        return res.status(200).json({
            message: `This Work has been deleted based on this ${id}`,
            blog: {
                id: works.id,
                title: works.title,
                description: works.description,
                source: works.source,
                image:  works.img
            }
        })

    } catch (error) {
        next(error)
    }

}