import { PrismaClient } from "@prisma/client";
import { HeroBody } from "@model/hero-model";
import * as fs from 'fs'


const prisma = new PrismaClient()

export const createHero = async (hero: HeroBody, image: string) => {
    return prisma.hero.create({
        data: {
            title: hero.title,
            subtitle: hero.subtitle,
            description: hero.description,
            img: image
        }
    })
}



export const findAllHero = async () => {
    return prisma.hero.findMany()
}


export const findOneHero = async (id: number) => {
    return prisma.hero.findUnique({
        where: {
            id: id
        }
    })
}


export const updateHero = async (id: number, hero: HeroBody, image: string) => {
    return prisma.hero.update({
        where: {
            id: id
        },
        data: {
            title: hero.title,
            subtitle: hero.subtitle,
            description: hero.description,
            img: image
        }
    })
}



export const removeHero = async (id: number) => {
    const hero = await prisma.hero.delete({ where: { id: id } });

    fs.rm(hero.img, (err) => {
        if (err) {
            console.log('deleted');
        }
    });

    return hero;
}
