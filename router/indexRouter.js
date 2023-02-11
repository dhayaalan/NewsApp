const express = require('express');
const router = express.Router();
const {
  getNews,
  postNews,
  deleteNews,
  deleteAllNews,
  getSingleNews,
  updateNews,
} = require('../controller/indexController');

router.get('/', getNews);

router.get('/:id', getSingleNews);

router.post('/', postNews);

router.put('/:id', updateNews);

router.delete('/:id', deleteNews);

router.delete('/', deleteAllNews);

module.exports = router;
