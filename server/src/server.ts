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

modules.get.forEach(({ route, controller }) => {
    app.get(route, controller)
});

modules.post.forEach(({ route, controller }) => {
    app.post(route, controller)
});

databaseModel.connect(app, process.env.MONGODB_URL as string)