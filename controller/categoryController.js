const { v1: uuidv1 } = require('uuid');
const category = require('../models/category');

// Get All category
exports.list = async (req, res) => {
  try {
    const categoryList = await category.find().populate();
    res.json(categoryList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get Single Category
exports.category = async (req, res) => {
  const categories = await category.findById(req.params.id);
  if (categories != null) {
    return res.status(200).json({ categories: categories });
  }
};

//Create Single Category
exports.create = async (req, res) => {
  const create = new category({
    id: uuidv1(),
    name: req.body.name,
  });
  const categorylist = await create.save();
  res.status(201).json(categorylist);
};

//update single Category
exports.modifies = async (req, res) => {
  const modifies = await category.updateOne({
    name: req.body.name,
  });
  try {
    res.status(201).json({ modifies });
  } catch (err) {
    res.json({ message: err.message });
  }
};

//Delete Sinlge Category
exports.remove = async (req, res) => {
  const remove = await category.deleteOne(req.params.id);
  try {
    res.status(200).json({ remove: remove });
  } catch (err) {
    res.json({ message: err.message });
  }
};
