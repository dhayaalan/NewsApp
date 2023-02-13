const mongoose = require('mongoose');

const HomeScreen = new mongoose.Schema({
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
});

module.exports = mongoose.model('Index', HomeScreen);
