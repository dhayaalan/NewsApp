const express = require('express');
const db = require('./util/db');
const indexRouter = require('./router/indexRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/index', indexRouter);

db.once('open', () => {
  console.log('Connected to database');
});

app.listen(3003, () => {
  console.log('Server as started');
});
