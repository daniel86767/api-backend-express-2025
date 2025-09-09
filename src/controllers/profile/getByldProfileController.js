import { getByid } from "../../models/profileModel.js";
export const getByIdProfileController = (req, res) => {
    const dados = req.body;
    console.log(dados);
    res.json({
        message: 'perfil editado criado com sucesso!'
    });
};