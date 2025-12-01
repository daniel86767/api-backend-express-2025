import { remove,  validateProfile } from "../../models/profileModel.js";

export const deleteProfileController = async (req, res) => {
  try {
    const id = Number(req.params.id); // garante que seja número

    // 🔍 validar o ID
    const validation = validadeprofile({ id }, { id: true });

    if (!validation.success) {
      return res.status(400).json({
        message: "ID inválido",
        errors: validation.errors
      });
    }

    // 🔐 verificar permissão
    if (req.userLogged.id !== id) {
      return res.status(403).json({
        message: "Você não tem permissão para deletar este perfil"
      });
    }

    // 🗑 deletar no banco
    const result = await remove(id);

    return res.json({
      message: `Usuário com id ${id} deletado com sucesso!`,
      profile: result
    });

  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    return res.status(500).json({ message: "Erro ao deletar usuário" });
  }
};