// Node Modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

// Local Imports
import router from "./src";

const app = express();
const PORT = 4000;

// Helmet
app.use(helmet());

// CORS
app.use(cors());

// BodyParser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
app.use(router);

// Base Method
app.get("/", (req, res) => res.send(`Welcome to Express Boiler.`));

// Listen to server
app.listen(PORT, () =>
  console.log(`Running API server at route http://localhost:${PORT}/`)
);
