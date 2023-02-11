const express = require('express');
const router = express.Router();
const {
  getNews,
  postNews,
  deleteNews,
  deleteAllNews,
  getSingleNews,
} = require('../controller/indexController');

router.get('/', getNews);

router.get('/:id', getSingleNews);

router.post('/', postNews);

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Updated Data sent ${req.params.id}` });
});

router.delete('/:id', deleteNews);

router.delete('/', deleteAllNews);

module.exports = router;
