import express from 'express';
import RegisterController from '../controllers/registerController';

const router = express.Router();

const registerController = new RegisterController();

router.post('/register', async (req, res) => {
  try {
    await registerController.register(req, res); 
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
