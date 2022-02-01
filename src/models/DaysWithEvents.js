import mongoose from "mongoose";

const dayseventsSchema = new mongoose.Schema({
  days_with_events: [],
});

export default mongoose.model("dayevents", dayseventsSchema);
