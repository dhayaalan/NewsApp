const express = require('express');
const router = express.Router();
const {
  getHomeController,
  putHomeController,
  deleteHomeController,
} = require('../controller/homeController');

router.get('/', getHomeController);

router.post('/', putHomeController);

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Updated Data sent ${req.params.id}` });
});

router.delete('/:id', deleteHomeController);

module.exports = router;
