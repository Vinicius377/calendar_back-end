import express from "express";
import "./database/config.js";
import "./controllers/getEvents.js";
import routers from "./router.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.listen(3000, () => console.log("server is running"));
