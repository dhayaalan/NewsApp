const express = require('express');
const router = express.Router();
const {
  list,
  remove,
  modifies,
  create,
  category,
} = require('../controller/CategoryController');

router.get('/', list); // Get All the list category

router.get('/:id', category); // Get Single category

router.post('/', create); //Create the single category

router.put('/:id', modifies); //Update the single category

router.delete('/:id', remove); //Delete the single category

module.exports = router;
