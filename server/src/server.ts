import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "module-alias/register";
import { currentDatabaseService } from "@database";
import { modules } from "@modules";

const app = express();

dotenv.config({ path: "./.env" });

app.use(bodyParser.json());

modules.get.forEach(({ route, controller }) => {
  app.get(route, controller);
});

modules.post.forEach(({ route, controller }) => {
  app.post(route, controller);
});

const PORT = process.env.PORT || 5001;

currentDatabaseService.connect(process.env.MONGODB_URL as string).then(() => {
  app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
});
