    import { Request, Response } from 'express';
    import { comparePasswords, getUsers } from '../services/authService';
    import jwt from 'jsonwebtoken';

    export class AuthController {
    async login(req: Request, res: Response): Promise<Response> { 
        const { username, password } = req.body;

        try {
        const users = getUsers();
        const user = users.find((user: any) => user.username === username);

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await comparePasswords(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        return res.json({ token });
        } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default AuthController
