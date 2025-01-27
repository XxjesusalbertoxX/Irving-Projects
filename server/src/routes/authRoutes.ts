import express from 'express';

import AuthController from '../controllers/authController';

const router = express.Router();

const HelloController = new AuthController();

router.get('/hello', HelloController.helloWorld);

export default router;