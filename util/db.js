const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(
  'mongodb+srv://admin:admin@newsfeed.zsinnzb.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;

module.exports = db;
