import { Knex } from 'knex';

const tableName = 'calculations';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary();
    table.string('expression').notNullable();
    table.integer('result').notNullable();
    table.timestamp("last_request_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}