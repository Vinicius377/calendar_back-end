import mongoose from "mongoose";

let connection;

async function conncectionDB() {
  connection = await mongoose.connect("mongodb://localhost/calendar");
}
conncectionDB();
export default connection;
