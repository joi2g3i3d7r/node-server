import dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_HOSTNAME: databaseHostname,
  DATABASE_USER: databaseUser,
  DATABASE_PASSWORD: databasePassword,
  DATABASE_PORT: databasePort,
  DATABASE_NAME: databaseName,
} = process.env;


export {
  databaseHostname,
  databaseUser,
  databasePassword,
  databasePort,
  databaseName,
};

