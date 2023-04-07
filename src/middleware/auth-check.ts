// import { Request, Response, NextFunction } from "express";
// import { findToken } from "@service/token.service";

// export const authCheck = (admin: boolean) => {

//     return async (req: Request, res: Response, next: NextFunction) => {
//         try {

//             const token = req.header('authorization')?.split(' ')[1]

//             if (!token) {
//                 return res.status(401).json({
//                     message: 'token not provided'
//                 })
//             }

//             const user = await findToken(token!)

//             if (!user) {
//                 return res.status(401).json({
//                     message: 'Invalid token!'
//                 })
//             }

//             if (admin) {
//                 if (user.role !== "admin") {
//                     return res.status(401).json({
//                         message: "Acces denied"
//                     })
//                 }
//             }

//             res.locals.user = user
//             next()

//         }
//         catch (err) {
//             next(err)
//             console.log(err)
//         }
//     }

// }