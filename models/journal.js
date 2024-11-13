const mongoose = require("mongoose");
const journalSchema = mongoose.Schema({
coverMaterial: String,
pages: Number,
cost: Number
});
module.exports = mongoose.model("Journal",
journalSchema);

