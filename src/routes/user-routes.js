import express from 'express';
import * as userCtrl from '../controllers/user-controller.js';

const router = express.Router();

router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.post('/users', userCtrl.createUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

export default router;