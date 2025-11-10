import { list } from "../../models/profileModel.js"
export const listProductController = async (req, res) => {
    const products = await list();
    res.json("produtos listados com sucesso!");
}