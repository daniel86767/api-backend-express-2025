import { getByid } from "../../models/profileModel";
export const getByidProductController = (req, res) => {
    const id = req.params.id;
    res.json({
        message: `produto com id ${id} encontrado com sucesso!`
    });
}