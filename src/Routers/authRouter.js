import express from "express";
import { loginController } from "../controllers/auth/loginController.js"; // precisa do .js no final

const router = express.Router(); // "Router" com R maiúsculo

router.post("/login", loginController); // rota com /login e função controladora

export default router; // exporta para o server usar