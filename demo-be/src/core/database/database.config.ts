import * as dotenv from 'dotenv';
import { DEVELOPMENT, QA, PRODUCTION } from '../constants';
import * as dbConfigInterface from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: dbConfigInterface.IDatabaseConfigAttributes = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
};
