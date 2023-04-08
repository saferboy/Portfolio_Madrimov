import { PrismaClient } from "@prisma/client";
import { LikesBody } from "@model/likes-model";

const prisma = new PrismaClient()

export const createLike = async (blogId: number, like: LikesBody) => {
    return prisma.likes.create({
        data: {
            uid: like.uid,
            blogsId: blogId
        }
    })
}


export const removeLike = async (id: number) => {
    return prisma.likes.delete({
        where: {
            id: id
        }
    })
}


export const findLike = async (id: number) => {
    return prisma.likes.findUnique({
        where: {
            id: id
        }
    })
}