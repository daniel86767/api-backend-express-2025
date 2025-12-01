import { z } from "zod";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

// --------------------
// 📌 Schema de validação
// --------------------
const profileSchema = z.object({
  id: z.number().positive().optional(),
  name: z.string().min(3).max(100),
  pass: z.string().min(6).max(255),
  avatar: z.string().url()
});

// --------------------
// 📌 Função para validar (criar ou atualizar)
// --------------------
export function validateProfile(data, isPartial = false) {
  const schema = isPartial ? profileSchema.partial() : profileSchema;
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.issues,
    };
  }

  return {
    success: true,
    data: result.data,
  };
}

// --------------------
// 🟢 Criar novo perfil
// --------------------
export const create = async (profile) => {
  return await prisma.profile.create({
    data: profile,
    select: {
      id: true,
      name: true,
      avatar: true,
      pass: false
    }
  });
};

// --------------------
// 🟡 Atualizar perfil
// --------------------
export const update = async (id, data) => {
  return await prisma.profile.update({
    where: { id: Number(id) },
    data,
    select: {
      id: true,
      name: true,
      avatar: true
    }
  });
};

// --------------------
// 🔵 Buscar por email
// --------------------
export const getByEmail = async (email) => {
  return await prisma.profile.findUnique({
    where: { email }
  });
};

// --------------------
// 🟣 Listar todos
// --------------------
export const list = async () => {
  return await prisma.profile.findMany({
    select: {
      id: true,
      name: true,
      avatar: true
    }
  });
};

// --------------------
// 🔴 Remover por ID
// --------------------
export const remove = async (id) => {
  return await prisma.profile.delete({
    where: { id: Number(id) },
    select: {
      id: true,
      name: true,
      avatar: true
    }
  });
};
