const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(
  'mongodb+srv://admin:admin@newsfeed.zsinnzb.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;

app.listen(3003, () => {
  console.log('Server as started');
});
