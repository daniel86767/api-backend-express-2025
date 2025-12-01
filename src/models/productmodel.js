import express from 'express'
import { createProductController } from '../controllers/product/createProductController.js'
import { listProductController } from '../controllers/product/ListProductController.js'
import { getByIdProductController } from '../controllers/product/getByIdProductController.js'
import { editProductController } from '../controllers/product/editProductController.js'
import { deleteProductController } from '../controllers/product/deleteProductController.js'
import { authenticator } from '../middlewares/authenticator.js'

const router = express.Router()

// Rotas públicas
router.get('/', listProductController)
router.get('/:id', getByIdProductController)

// Rotas protegidas
router.use(authenticator)

router.post('/', createProductController)
router.put('/:id', editProductController)
router.delete('/:id', deleteProductController)

export default router