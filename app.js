const express = require('express');
const cors = require('cors');
const db = require('./util/db');
const newsRouter = require('./router/newsRouter');
const categroyRouter = require('./router/categoryRouter');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/news', newsRouter);
app.use('/categories', categroyRouter);

db.once('open', () => {
  console.log('Connected to database');
});

app.listen(3003, () => {
  console.log('Server as started');
});
