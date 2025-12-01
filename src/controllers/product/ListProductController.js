import { list } from "../../models/profileModel.js"
export const listProductController = async (req, res) => {
    try {
        const products = await list();
        res.json({
          message: "Produtos listados com sucesso!",
          products,
        });
      } catch (error) {
        console.error("Erro ao listar produtos:", error);
        res.status(500).json({ message: "Erro ao listar produtos" });
      }
}