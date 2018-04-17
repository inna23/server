const mongoose = require('mongoose');

//How my product should look like
const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number
});

module.exports = mongoose.model('Product', productSchema);
