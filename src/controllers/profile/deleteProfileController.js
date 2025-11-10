import { remove } from "../../models/profileModel.js";

export const deleteProfileController = async (req, res) => {
  try {
    const id = Number(req.params.id); // converte o id para número

    const result = await remove(id);

    res.json({
      message: `Usuário com id ${id} deletado com sucesso!`,
      profile: result
    });
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ message: "Erro ao deletar usuário" });
  }
};