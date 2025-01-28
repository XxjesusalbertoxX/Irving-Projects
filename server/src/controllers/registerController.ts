import { Request, Response } from 'express';
import { userExists, hashPassword, saveUser } from '../services/authService';

export class RegisterController {
  async register(req: Request, res: Response): Promise<Response> { 

    const { username, password } = req.body;

    try {
      if (userExists(username)) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      console.log(userExists(username))
      const hashedPassword = await hashPassword(password);
      console.log(hashedPassword)
      saveUser({id: 3, username, password: hashedPassword, rol: "admin" });

      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

export default RegisterController;
