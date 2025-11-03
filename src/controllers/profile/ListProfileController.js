import { list } from "../../services/profile/ListProfileService.js";
export const listProfileController = async (req, res) => {
    const profiles = await list();
    res.json("perfils listados com sucesso!");
}