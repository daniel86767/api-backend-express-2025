import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

// 🟢 Criar um novo perfil
export const create = async (profile) => {
  return await prisma.profile.create({
    data: profile,
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true
    }
  });
};

// 🟡 Atualizar um perfil existente
export const update = async (id, profile) => {
  return await prisma.profile.update({
    where: { id },
    data: profile,
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true
    }
  });
};

// 🔵 Buscar perfil por ID
export const getByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email }
    })
}


// 🟣 Listar todos os perfis
export const list = async () => {
  return await prisma.profile.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true
    }
  });
};

// 🔴 Remover um perfil por ID
export const remove = async (id) => {
  return await prisma.profile.delete({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true
    }


  });
};