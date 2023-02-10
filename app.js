const express = require('express');
const app = express();
const mongoose = require('mongoose');
const homeRouter = require('./router/homeRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/home', homeRouter);

mongoose.set('strictQuery', false);
mongoose.connect(
  'mongodb+srv://admin:admin@newsfeed.zsinnzb.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;

app.listen(3003, () => {
  console.log('Server as started');
});
