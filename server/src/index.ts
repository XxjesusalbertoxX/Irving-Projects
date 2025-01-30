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

console.log("🚀 Server is starting...");
process.on("exit", (code) => console.log(`❌ Server exited with code ${code}`));
process.on("SIGINT", () => console.log("❌ Server interrupted (SIGINT)"));
process.on("SIGTERM", () => console.log("❌ Server terminated (SIGTERM)"));

sequelize
  .authenticate()
  .then(() => console.log("✅ PostgreSQL Connected!"))
  .catch((err) => console.error("❌ Connection error:", err));

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
 });