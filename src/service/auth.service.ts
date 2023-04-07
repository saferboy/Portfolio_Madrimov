import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const validateUser = async (user: string) => {
    return prisma.user.findFirst({
        where: {
            username: user
        }
    })
}


export const updateLogin = async (username: string, password: string) => {
    return prisma.user.update({
        where: { 
            id: 1
         },
        data: { 
            username: username,
            password: password 
            
        },
    })
}

