import { update, validadeprofile } from "../../models/profileModel.js";

export const editProfileController = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const profile = req.body;

    // 🔍 Validar dados (edição parcial)
    const validation = validadeprofile(profile, true); // true = partial

    if (!validation.success) {
      return res.status(400).json({
        message: "Dados inválidos",
        errors: validation.errors
      });
    }

    // 🔐 Permissão: só pode alterar o próprio perfil
    if (req.userLogged.id !== id) {
      return res.status(403).json({
        message: "Você não tem permissão para editar este perfil"
      });
    }

    // 🛠 Atualizar no banco
    const result = await update(id, profile);

    return res.json({
      message: "Perfil atualizado com sucesso!",
      profile: result
    });

  } catch (error) {
    console.error("Erro ao editar perfil:", error);
    return res.status(500).json({
      message: "Erro interno ao editar perfil"
    });
  }
};