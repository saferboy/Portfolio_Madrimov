import { Request, Response, NextFunction } from "express";
import { validateUser } from "@service/auth.service";
// import { Login, User } from "@model/auth-model";
import jwt from "jsonwebtoken"


export default async (req: Request, res: Response, next: NextFunction) => {

    try {

        const data = req.body

        const login = await validateUser(data.username)

        if (!login) {
            return res.status(401).json({
                message: "Not found this username"
            })
        }

        if (login.password != data.password) {
            return res.status(401).json({
                message: "Username or Password wrong"
            })
        }

        const token = jwt.sign(login.password, login.username)


        return res.status(200).json({
            message: "You succesfully login",
            data: {
                username: login.username,
                password: login.password
            },
            token: token
        })



    } catch (error) {
        next(error)
    }

}