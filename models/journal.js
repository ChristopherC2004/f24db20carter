const mongoose = require("mongoose");
const journalSchema = mongoose.Schema({
coverMaterial: String,
pages: {
    type: Number,
    required: true, // Ensure the field is mandatory
    min: [30, "'pages' must be at least 30"], // Minimum value
    max: [1000, "'pages' cannot exceed 1000"], // Maximum value
    },
cost: Number 
});
module.exports = mongoose.model("Journal",
journalSchema);

