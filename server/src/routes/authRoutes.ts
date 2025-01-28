import express from 'express';
import AuthController from '../controllers/authController';

const router = express.Router();

const authController = new AuthController();

// Usar una función de middleware para manejar el controlador
router.post('/login', async (req, res) => {
  try {
    await authController.login(req, res);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
