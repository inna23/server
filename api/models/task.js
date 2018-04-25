const mongoose = require('mongoose');

//How my task should look like
 const  taskSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   title: String,
   user: String,
   description: String,
   status: String
 });

module.exports = mongoose.model('Task', taskSchema);
