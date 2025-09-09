import {remove} from "../../models/productModel.js";
export const deleteProductController = async (req, res) => {
    const id = req.params.id;

    // id vem da url como string precisa converter para number
    const result = await remove(+id); // +id converte para number ou usar number(id)
    res.json({
        message: `Produto com id ${id} deletado com sucesso!`,
        product: result
    });
}