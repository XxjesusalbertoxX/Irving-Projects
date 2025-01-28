import express from 'express';

import helloController from '../controllers/helloController';

const HelloController = new helloController();

const router = express.Router();

router.get('/hello', HelloController.helloWorld);

export default router;
