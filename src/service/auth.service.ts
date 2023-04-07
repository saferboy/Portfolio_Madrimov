import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const validateUser = async (user: string) => {
    return prisma.user.findUnique({
        where: {
            username: user
        }
    })
}




export const updateLogin = async (username: string, newPassword: string) => {
    return prisma.user.update({
        where: { username },
        data: { password: newPassword },
    })
}

