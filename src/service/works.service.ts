import { PrismaClient } from "@prisma/client";
import { Works } from "@model/works-model";

const prisma = new PrismaClient()

export const createWorks = async (works: Works, image: string) => {
    return prisma.works.create({
        data: {
            title: works.title,
            description: works.description,
            source: works.source,
            img: image
        }
    })
}


export const findOneWorks = async (id: number) => {
    return prisma.works.findUnique({
        where: {
            id: id
        }
    })
}


export const findAllWorks = async () => {
    return prisma.works.findMany()
}


export const updateWorks = async (id: number, works: Works, image: string) => {
    return prisma.works.update({
        where: {
            id: id
        },
        data: {
            title: works.title,
            description: works.description,
            source: works.source,
            img: image
        }
    })
}


export const deleteWorks = async (id: number) => {
    return prisma.works.delete({
        where: {
            id: id
        }
    })
}