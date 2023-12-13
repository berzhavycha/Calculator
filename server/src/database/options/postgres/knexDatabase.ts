import Knex from 'knex';
import config from './knexfile';
import { POSTGRES_MODE } from '@global';

export const database = Knex(config[POSTGRES_MODE || 'development']);