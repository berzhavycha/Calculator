import Knex from 'knex';
import config from './knexfile';

export const database = Knex(config[process.env.NODE_ENV || 'development']);