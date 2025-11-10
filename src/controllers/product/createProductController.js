import { create } from "../../models/profileModel.js";

export const createProductController = async (req, res) => {
  try {
    const product = req.body;
    const result = await create(product);
    res.json({
      message: "Produto criado com sucesso!",
      product: result
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar produto" });
  }
};