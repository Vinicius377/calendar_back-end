import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
  date: String,
  id: mongoose.ObjectId,
  data: [
    {
      subject: String,
      body: String,
    },
  ],
});

export default mongoose.model("events", eventsSchema);
