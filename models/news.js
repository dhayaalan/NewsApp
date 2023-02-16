const mongoose = require('mongoose');
const uuid = require('uuidv4');
const category = require('./category');

const NewsSchema = new mongoose.Schema({
  id: {
    type : String,
    required: true,
  },
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
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    selectPopulatedPaths: false,
  },
});

module.exports = mongoose.model('news', NewsSchema);
