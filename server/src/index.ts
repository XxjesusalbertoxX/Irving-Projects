import express from 'express';
import helloRoutes from './routes/authRoutes';

const app = express();
const port = 3000;

app.use('/api', helloRoutes); // This means the endpoint will be "/api/hello"

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});