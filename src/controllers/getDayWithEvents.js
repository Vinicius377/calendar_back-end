import Events from "../models/Events.js";

export default async function setEvents(req, res) {
  const query = await Events.find()
  console.log(query);
}
