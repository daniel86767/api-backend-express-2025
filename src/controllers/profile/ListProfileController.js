import { list } from "../../models/profileModel";
export const listProfileController = async (req, res) => {
    const profiles = await list();
    res.json("perfils listados com sucesso!");
}