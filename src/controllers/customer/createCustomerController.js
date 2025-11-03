import { create } from "../customer/createCustomerController";
export const createCustomerController = async (req, res) => {
    const profile = req.body;
    const result = await create(profile);
    res.json({
        message:'produto criado com sucesso',
        profile: result
    })
}