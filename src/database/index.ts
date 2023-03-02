import mongoose from "mongoose";

const base = "mongodb://127.0.0.1:27017/";
const database = "correios-rastreamento";

mongoose.set("strictQuery", true);
mongoose.connect(`${base}${database}`, {});
mongoose.Promise = global.Promise;

module.exports = mongoose;
