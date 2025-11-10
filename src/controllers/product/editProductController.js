import { update } from "../../models/profileModel.js";

export const editProductController = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: `produto com id ${id} editado com sucesso!`,
        updatedData: dados
    });
}
