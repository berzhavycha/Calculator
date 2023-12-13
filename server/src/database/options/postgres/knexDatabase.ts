import Knex from 'knex';
import config from './knexfile';
import { MODE } from '@global';

export const database = Knex(config[MODE || 'development']);