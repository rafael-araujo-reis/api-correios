import express from "express";
import cors from "cors";
import bodyParse from "body-parser";

const PORT = process.env.PORT || 3200;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";
const app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(cors({ origin: ["http://localhost:4200"] }));

require("./app/controllers/index")(app);
app.use((req, res) => {
  res.status(404).send({ error: "Endpoint not found" });
});

app.listen(PORT);
