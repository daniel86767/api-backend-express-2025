import express from 'express';

import { createProfileController } from '../controllers/profile/createProfileController.js';
import { listProfileController } from '../controllers/profile/ListProfileController.js';
import { getByIdProfileController } from '../controllers/profile/getByldProfileController.js';
import { deleteProfileController } from '../controllers/profile/deleteProfileController.js';

const router = express.Router();

router.post('/profile', createProfileController);
router.get('/', listProfileController);
router.get('/profile/:id', getByIdProfileController);
router.delete('/profile/:id/:name', deleteProfileController);

export default router;