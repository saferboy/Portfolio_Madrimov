import { Request, Response, NextFunction } from "express";
import { updateLogin, validateUser } from "@service/auth.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const data = req.body

        const option = await updateLogin(data.username, data.password)

        return res.status(200).json({
            message: "Your login has been updated successfully",
            data: {
                username: option.username,
                password: option.password
            }
        })

    } catch (error) {
        next(error)
    }

}
