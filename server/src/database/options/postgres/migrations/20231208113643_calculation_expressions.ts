import { POSTGRES_CALCULATION_HISTORY_COLLECTION} from '@global';
import { Knex } from 'knex';

export const tableName = POSTGRES_CALCULATION_HISTORY_COLLECTION;

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary();
    table.string('expression').notNullable();
    table.integer('result').notNullable();
    table.timestamp("lastRequestAt").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}