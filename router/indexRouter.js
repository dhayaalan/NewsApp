const express = require('express');
const router = express.Router();
const {
  getNews,
  postHomeController,
  deleteHomeController,
  getSingleNews,
} = require('../controller/indexController');

router.get('/', getNews);

router.get('/:id', getSingleNews);

router.post('/', postHomeController);

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Updated Data sent ${req.params.id}` });
});

router.delete('/:id', deleteHomeController);

module.exports = router;
