import { PrismaClient } from "@prisma/client";
import { BlogBody } from "@model/blog-model";

import * as fs from 'fs'

const prisma = new PrismaClient()

export const createBlog = async (blog: BlogBody, image: string) => {

    return prisma.blogs.create({
        data: {
            title: blog.title,
            content: blog.content,
            img: image
        },
        include: {
            likes: true,
            comments: true
        }
    })

}


export const getAllBlog = async () => {
    return prisma.blogs.findMany({
        include: {
            likes: true,
            comments: true
        }
    })
}


export const findOneBlog = async (blogId: number) => {
    return prisma.blogs.findUnique({
        where: {
            id: blogId
        },
        include: {
            likes: true,
            comments: true
        }
    })
}


export const updateBlog = async (blogId: number, blog: BlogBody, image: string) => {
    return prisma.blogs.update({
        where: {
            id: blogId
        },
        data: {
            title: blog.title,
            content: blog.content,
            img: image
        }
    })
}



export const deleteBlog = async (blogId: number) => {
    const result = await prisma.blogs.delete({
        where: {
            id: blogId
        }
    })

    console.log(result.img);

    fs.rm(result.img, (error) => {
        console.log('bla')
    })
    return result
}