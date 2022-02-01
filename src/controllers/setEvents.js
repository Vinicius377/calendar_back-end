import Events from "../models/Events.js";
import DayEvents from "../models/DaysWithEvents.js";

export default async function setEvents(req, res) {
  const { subject, body, date } = req.body;

  const existDate = await Events.find({ date });
  const data = { subject, body };
  if (existDate.length > 0) {
    Events.findOneAndUpdate({ date }, { $push: { data } }, function () {});
    res.json({ message: "atualizado" });
  } else {
    await Events.create({
      date,
      data: [data],
    });
    DayEvents.updateOne({}, { $push: date }, { upsert: true });
    res.json({ message: "criado" });
  }
}
