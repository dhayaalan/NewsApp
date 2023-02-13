const mongoose = require('mongoose');
const category = require('./category');

const NewsSchema = new mongoose.Schema({
  headlines: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  newsDate: {
    type: Date,
    required: true,
    default: Date.now,
    ref: category,
  },
});

module.exports = mongoose.model('news', NewsSchema);
