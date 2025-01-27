import express from 'express';
import http, { IncomingMessage, ServerResponse } from 'http'
import authRoutes from './routes/authRoutes';
import helloRoutes from './routes/helloRoutes';
import registerRoutes from './routes/registerRoutes';
import dotenv from 'dotenv';



dotenv.config();
const server = http.createServer((req: IncomingMessage, res: ServerResponse): void => {
    res.statusCode = 200;

    res.end("Hello World");
});
const app = express();

//middleware
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/v1.0.0/auth', registerRoutes);

app.use('/api/v1.0.0/auth', authRoutes);

app.use('/api/helloworld', helloRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});