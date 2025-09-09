import { update } from "../../models/profileModel";
export const editProfileController = (req, res) => {
    const id = req.params.id;
    const profile = req.body;
    res.json({
        message: 'perfil de usuario editado com sucesso!',
        profile: dados
    });
}