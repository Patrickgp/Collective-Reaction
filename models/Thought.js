const { Schema, Types } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  thoughtText: {
    type: String,
    required: true,
    // Must be between 1 and 280 characters
  },
  username: {
    type: String,
    required: true,
  },
});
