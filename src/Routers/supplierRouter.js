import express from 'express';
import { createSupplierController } from '../controllers/supplier/createSuppliterController.js';
import { getByIdSupplierController } from '../controllers/supplier/getByidSupplierController.js';
import { editSupplierController } from '../controllers/supplier/EditSupplierController.js';
import { deleteSupplierController } from '../controllers/supplier/deleteSupplierController.js';

const router = express.Router();

router.post('/profile', createSupplierController);
router.get('/:id', getByIdSupplierController);
router.put('/:id', editSupplierController);
router.delete('/:id/:name', deleteSupplierController);

export default router;