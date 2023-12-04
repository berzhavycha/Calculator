import express from "express";
import bodyParser from "body-parser";
import "module-alias/register";
import { PORT, MONGODB_URL } from "@global";
import { currentDatabase } from "@database";
import { modules } from "@modules";

const app = express();

app.use(bodyParser.json());

modules.get.forEach(({ route, controller }) => {
  app.get(route, controller);
});

modules.post.forEach(({ route, controller }) => {
  app.post(route, controller);
});

currentDatabase.connect(MONGODB_URL).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
