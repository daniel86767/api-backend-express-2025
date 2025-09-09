import { remove } from "../../models/profileModel.js";

export const deleteProfileController = async (req, res) => {
    const id = req.params.id

    //id vem da url como string precisa converter para number
    const result = await remove(+id)//+id converte para number ou usar number(id) 
    res.json({
        message:"usuário com id ${id} deletado com sucesso!",
        profile: result
    })
}

