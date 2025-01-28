import express from 'express';
import sequelize from '../database/config/database';
// import http, { IncomingMessage, ServerResponse } from 'http'
import authRoutes from './routes/authRoutes';
import helloRoutes from './routes/helloRoutes';
import registerRoutes from './routes/registerRoutes';
import dotenv from 'dotenv';



dotenv.config();
// const server = http.createServer((req: IncomingMessage, res: ServerResponse): void => {
//     res.statusCode = 200;

//     res.end("Hello World");
// });
const app = express();

//middleware
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/v1.0.0/auth', registerRoutes);

app.use('/api/v1.0.0/auth', authRoutes);

app.use('/api/helloworld', helloRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
