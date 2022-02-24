import Events from "../models/Events.js";

export default function getEvents(req, res) {
  const { date } = req.params;
  try {
    Events.deleteOne({ date }).then(() => res.send("deletado"));
  } catch (e) {
    res.status(400);
  }
}
