import knex from 'knex';
import path from 'path';
import { databaseHostname, databaseName, databasePassword, databasePort, databaseUser } from '../config.js';

const conn = knex({
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
});

export const TABLES = {
  USERS: 'Users',
}

export default conn;
