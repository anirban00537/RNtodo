const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  todo: String,
});
const TodoModel = mongoose.model("TodoSchema", TodoSchema);
module.exports = TodoModel;
