import express from "express";
import bodyParser from "body-parser";
import "module-alias/register";
import { currentDatabase } from "@database";
import { modules } from "@modules";
import { PORT, MONGODB_URL } from "@global";

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
