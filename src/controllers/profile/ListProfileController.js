import { list } from "../../models/profileModel.js";

export const listProfileController = async (req, res) => {
  try {
    const profiles = await list();
    res.status(200).json({
      message: "Perfis listados com sucesso!",
      data: profiles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao listar perfis" });
  }
};