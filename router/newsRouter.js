const express = require('express');
const router = express.Router();
const {
  list,
  news1,
  create,
  remove,
  deleteList,
  modifies,
} = require('../controller/newsController');

router.get('/', list); //Get the list of news

router.get('/:id', news1); //Get the single news

router.post('/', create); //Create the single news

router.put('/:id', modifies); //Update the single news

router.delete('/:id', remove); //Delete the sinlge news

module.exports = router;
