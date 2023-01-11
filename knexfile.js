import path from 'path';
import { databaseHostname, databaseName, databasePassword, databasePort, databaseUser } from './config.js';

export default {
  client: 'mysql2',
  connection: {
    host: databaseHostname,
    database: databaseName,
    user: databaseUser,
    password: databasePassword,
    port: +databasePort,
  },
  migrations: {
    directory: path.join(process.cwd(), 'db', 'migrations'),
  },
  seeds: {
    directory: path.join(process.cwd(), 'db', 'seeds'),
  },
};
