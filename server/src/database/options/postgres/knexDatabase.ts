import Knex from 'knex';
import configs from '../../../../knexfile';

export const knexDatabase = Knex(configs[process.env.NODE_ENV || 'development']);