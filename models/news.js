const mongoose = require('mongoose');
const category = require('./category');

const NewsSchema = new mongoose.Schema({
  headlines: {
    type: String,
    required: true,
    ref: 'category',
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
  },
});

module.exports = mongoose.model('news', NewsSchema);
