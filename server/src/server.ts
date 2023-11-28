import express from 'express';
import dotenv from 'dotenv'
import modules from '@modules'
import bodyParser from 'body-parser';
import 'module-alias/register';
import { currentDatabase } from '@database';

const app = express();

dotenv.config({ path: './.env' })

app.use(bodyParser.json())

modules.get.forEach(({ route, controller }) => {
    app.get(route, controller)
});

modules.post.forEach(({ route, controller }) => {
    app.post(route, controller)
});

currentDatabase.connect(app, process.env.MONGODB_URL as string)