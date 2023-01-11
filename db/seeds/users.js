import bcrypt from 'bcrypt';
import { TABLES } from '../db.config.js';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  const saltRounds = 12;
  await knex(TABLES.USERS).truncate();

  const salt = await bcrypt.genSalt(saltRounds);

  await knex(TABLES.USERS).insert([
    {
      user: 'admin',
      password: await bcrypt.hash('admin', salt),
      fullName: 'Jhon Doe',
    },
    {
      user: 'admin2',
      password: await bcrypt.hash('admin2', salt),
      fullName: 'Jhon Doe 2',
    },
  ]);
};
