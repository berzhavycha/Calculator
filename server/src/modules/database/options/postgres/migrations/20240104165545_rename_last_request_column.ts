import { POSTGRES_CALCULATION_HISTORY_COLLECTION } from '@global';
import { Knex } from 'knex';

export const tableName = POSTGRES_CALCULATION_HISTORY_COLLECTION;

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable(tableName, function (table) {
    table.renameColumn('last_request_at', 'lastRequestAt');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable(tableName, function (table) {
    table.renameColumn('lastRequestAt', 'last_request_at');
  });
}
