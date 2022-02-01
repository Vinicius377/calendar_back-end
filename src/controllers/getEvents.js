import Events from "../models/Events.js";

export default async function getEvents(req, res) {
  const { date } = req.params;
  const query = await Events.findOne({ date });
  if (query) {
    res.json(query);
  } else {
    res.send({ message: "not event" });
  }
}
