import { remove } from '../../models/profileModel.js';

export const deleteProductController = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const result = await remove(id);
    res.json({
      message: `Produto com id ${id} deletado com sucesso!`,
      product: result
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao deletar produto" });
  }
};