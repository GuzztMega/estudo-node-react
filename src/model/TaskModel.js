const mongoose = require('../config/database.js');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  macAdress: {type: String, required: true},
  type: {type: Number, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  when: {type: Date, default: true},
  created: {type: Date, default: Date.now()}
})

module.exports = mongoose.model("Task", TaskSchema);