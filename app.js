const express = require('express');
const app = express();
const mongoose = require('mongoose');
const indexRouter = require('./router/indexRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/index', indexRouter);

mongoose.set('strictQuery', false);
mongoose.connect(
  'mongodb+srv://admin:admin@newsfeed.zsinnzb.mongodb.net/?retryWrites=true&w=majority'
);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Connected to database');
});

app.listen(3003, () => {
  console.log('Server as started');
});
