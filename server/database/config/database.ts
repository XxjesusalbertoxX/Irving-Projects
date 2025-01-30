import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost', 
  port: Number(process.env.DB_PORT) || 5432, 
  username: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'admin123', 
  database: process.env.DB_NAME || 'mydb',  
  dialect: 'postgres', 
  logging: false,  
});

export default sequelize;
