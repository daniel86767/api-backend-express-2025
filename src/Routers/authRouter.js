import express from "express"
import { loginController } from "../controllers/auth/loginController"

const router = express.router()

router.post('./login')