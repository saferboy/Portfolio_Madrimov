import { Request, Response, NextFunction } from "express";
import { updateLogin, validateUser } from "@service/auth.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const data = req.body

        const user = await validateUser(data.username)

        if (!user) {
            return res.status(400).json({
                message: `User with username ${data.username} not found` 
            })
        }

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
