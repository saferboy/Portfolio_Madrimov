import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const findToken = async (token: string) => {

    return prisma.user.findFirst({
        where: {
            token: token
        }
    })

    // const result = await client.query(sql, [token])

    // if (result.rowCount > 0) {
    //     return result.rows[0] as Users
    // }

    // return null
}