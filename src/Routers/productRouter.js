import express from 'express';
import { createProductController } from '../controllers/product/createProductController.js';
import { listProductController } from '../controllers/product/ListProductController.js';
import { editProductController } from '../controllers/product/editProductController.js';
import { getByidProductController } from '../controllers/product/getByldProductController.js';
import { deleteProductController } from '../controllers/product/deleteProductController.js';

const router = express.Router();

router.post('/', createProductController);
router.get('/:id', getByidProductController);
router.get('/', listProductController);
router.put('/:id', editProductController);
router.delete('/:id', deleteProductController);

export default router;