var mongoose = require("mongoose");

var SomethingSchema = new mongoose.Schema({
  label: { type: String, index: true },
  data: String,
});

const Something = mongoose.model("Something", SomethingSchema);
module.exports = Something;
