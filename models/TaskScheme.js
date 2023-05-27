const { Schema, model } = require("mongoose");

const TaskScheme = Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
  },
});

module.exports = model("Task", TaskScheme);
