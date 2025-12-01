import { create, validateProfile } from "../../models/profileModel.js";
import bcrypt from "bcrypt";

export const createProfileController = async (req, res, next) => {
  try {
    const profile = req.body;

    // 1️⃣ Validar dados (CREATE → não é parcial)
    const validation = validateProfile(profile, false);

    if (!validation.success) {
      return res.status(400).json({
        message: "Dados inválidos",
        errors: validation.errors,
      });
    }

    const validData = validation.data;

    // 2️⃣ Criptografar senha
    validData.pass = await bcrypt.hash(validData.pass, 10);

    // 3️⃣ Criar no banco
    const result = await create(validData);

    return res.status(201).json({
      message: "usuario criado com sucesso",
      profile: result,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Erro interno no servidor",
      error: err.message,
    });
  }
};