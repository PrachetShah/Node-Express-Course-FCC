const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  // Basic Validators
  name: {
    type: String,
    // we can also add a custom msg
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name cannot exceed 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
