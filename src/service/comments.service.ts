import { PrismaClient } from "@prisma/client";
import { CommentBody } from "@model/coments-model";

const prisma = new PrismaClient()

export const createComment = async (blogId: number, commentDto: CommentBody) => {
    return prisma.comments.create({
        data: {
            email: commentDto.email,
            comment:    commentDto.comment,
            blogsId: blogId
        }
    })
}


export const removeComment = async (commentId: number) => {
    return prisma.comments.delete({
        where: {
            id: commentId
        }
    })

}


export const findComment = async (id: number) => {
    return prisma.comments.findUnique({
        where: {
            id: id
        }
    })
}