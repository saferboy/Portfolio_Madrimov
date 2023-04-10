import { PrismaClient } from "@prisma/client";
import { ExperinceDto } from "@model/experince-model";

const prisma = new PrismaClient()

export const createExperience = async (experince: ExperinceDto) => {
    return prisma.experience.create({
        data: {
            year: experince.year,
            description: experince.description
        }
    })
}


export const findOne = async (id: number) => {
    return prisma.experience.findUnique({
        where: {
            id: id
        }
    })
}


export const findAllExperience = async () => {
    return prisma.experience.findMany()
}


export const updateExperience = async (id: number, experience: ExperinceDto) => {
    return prisma.experience.update({
        where: {
            id: id
        },
        data: {
            year: experience.year,
            description: experience.description
        }
    })
}


export const removeExperience = async (id: number) => {
    return prisma.experience.delete({
        where: {
            id: id
        }
    })
}