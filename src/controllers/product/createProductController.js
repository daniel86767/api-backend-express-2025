import { create } from "../../models/profileModel";
export const createProductController = async (req, res) => {
    const profile = req.body;
    const result = await create(profile);
    res.json({
        message:'produto criado com sucesso',
        profile: result
    })
}