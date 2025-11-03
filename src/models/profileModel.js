import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient()

export const create = async (profile) => {
    return await prisma.profile.create({
       data: profile,
        select:{
            id:true,
            name:true,
            email:true,
            avatar:true
        }
    })
}

export const update = async (id,profile) => {
    return await prisma.profile.create({
        data: profile,
        select:{
            id:true,
            name:true,
            email:true,
            avatar:true
        }
    })
}

export const getByid = async (id) => {
    return await prisma.user.findFirst({
        data: profile,
        select:{
            id:true,
            name:true,
            email:true,
            avatar:true
        }
    })
}



export const list = async (id) => {
    return await prisma.usar.fidmary({
        data: profile,
        select:{
            id:true,
            name:true,
            email:true,
            avatar:true
        }
    })
}

export const remove = async (id) => {
    return await prisma.profile.delete({
        where: { id },
        data: profile,
        select:{
            id:true,
            name:true,
            email:true,
            avatar:true
        }
    })
}