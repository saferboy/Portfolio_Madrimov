import { Request, Response, NextFunction } from "express";
import { updateLogin, validateUser } from "@service/auth.service";


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const username = req.body
        const password = req.body
        
        const user = await validateUser(username)

        if (!user) {
            return res.status(401).json({
                message: "Not found this username"
            })
        }

        if (user.password != username.password) {
            return res.status(401).json({
                message: "Username or Password wrong"
            })
        }

        const option = await updateLogin(username, password)

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