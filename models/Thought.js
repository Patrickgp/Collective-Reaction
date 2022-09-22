const { Schema, model, Types } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    // Must be between 1 and 280 characters
  },
  username: {
    type: String,
    required: true,
  },
  reactions: {},
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
