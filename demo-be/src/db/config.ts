// import { databaseConfig } from '../core/database/database.config';
// require ('dotenv') .config();

module.exports = {
    development: {
      username: 'postgres',
      password: 'Pass123',
      database: 'MasFeedback',
      host:'localhost' ,
      dialect: 'postgres',
      port: 5432
    },
    test: {
      username: 'postgres',
      password: 'Pass123',
      database: 'MasFeedback',
      host:'localhost' ,
      dialect: 'postgres',
      port: 5432
    },
    production: {
      username: 'postgres',
      password: 'Pass123',
      database: 'MasFeedback',
      host:'localhost' ,
      dialect: 'postgres',
      port: 5432
    }
  }