import { Router } from "express";
const routers = Router();
import getDayWithEvents from "./controllers/getDayWithEvents.js";
import setEvents from "./controllers/setEvents.js";
import getEvents from "./controllers/getEvents.js";
import deleteEvent from "./controllers/deleteEvent.js";

routers.get("/events", getDayWithEvents);
routers.get("/events/:date", getEvents);
routers.post("/events", setEvents);
routers.delete("/events/:date", deleteEvent);

export default routers;
