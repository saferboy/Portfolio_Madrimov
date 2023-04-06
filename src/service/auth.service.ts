import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const validateUser = async (username: string) => {
    return prisma.user.findUnique({
        where: {
            username: username
        }
    })
}


export const updateLogin = async (username: string, password: string) => {
    return prisma.user.update({
        where: {
            username
        },
        data: {
            username,
            password
        }
    })
}


// export const deleteLogin = async (username: string) => {
//     return prisma.user.delete({
//         where: {
//             username
//         }
//     })
// }