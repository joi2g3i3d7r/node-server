import { TABLES } from '../db.config.js';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = (knex) => knex.schema.createTable(TABLES.USERS, (table) => {
  table.increments('id').notNullable().primary();
  table.string('user', 255);
  table.string('password', 255);
  table.string('fullName', 255);
  table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
  table.datetime('updatedAt');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = (knex) => knex.schema.dropTable(TABLES.USERS);
