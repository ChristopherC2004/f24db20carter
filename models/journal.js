const mongoose = require("mongoose");
const journalSchema = mongoose.Schema({
coverMaterial: {
    type: String,
    enum: {
        values: ['Leather', 'Hardcover', 'Softcover'], // Allowed values
      },
    required: true,
},
pages: {
    type: Number,
    required: true, 
    min: [30], // Minimum value
    max: [1000], // Maximum value
},
cost:{ 
    type: Number,
    required: true,
} 
});
module.exports = mongoose.model("Journal",
journalSchema);

