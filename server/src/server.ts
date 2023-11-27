import express, { Request, Response } from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import modules from './modules/index'
import bodyParser from 'body-parser';
import 'module-alias/register';
import config from '@config';
import { databaseModel } from '@database';

const app = express();

dotenv.config({ path: './.env' })

app.use(bodyParser.json())

app.get('/', (_req: Request, res: Response) => res.send('Server running'));

app.get('/operations', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json').status(200).json(config.operations)
})

modules.post.forEach(({ route, controller }) => {
    app.post(route, controller)
});

databaseModel.connect(app, process.env.MONGODB_URL as string)