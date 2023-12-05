import express from "express";
import bodyParser from "body-parser";
import "module-alias/register";
import { PORT, MONGODB_URL } from "@global";
import { currentDatabase } from "@database";
import { modules } from "@modules";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

modules.get.forEach(({ route, controller }) => {
  app.get(route, controller);
});

modules.post.forEach(({ route, controller }) => {
  app.post(route, controller);
});

currentDatabase.connect(MONGODB_URL).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
