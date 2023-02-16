const { v1: uuidv1 } = require('uuid');
const news = require('../models/news');
const categoryModel = require('../models/category');

// Get All News
exports.list = async (req, res) => {
  try {
    const result = await news.find();
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get Single News
exports.news1 = async (req, res) => {
  const newses = await news.findById(req.params.id);
  if (newses != null) {
    return res.status(200).json({ newses: newses });
  }
};

//Create Single News
exports.create = async (req, res) => {
  var category = await categoryModel.findOne({ id: req.params.id });
  if (category == null) {
    return res.status(404).json({ message: 'category not found' });
  }
  const newsFeed = new news({
    category: category,
    id: uuidv1(),
    headlines: req.body.headlines,
    image: req.body.image,
    description: req.body.description,
  });
  const newNews = await newsFeed.save();
  res.status(201).json(newNews);
};

//update single News
exports.modifies = async (req, res) => {
  var category = await categoryModel.findOne({ id: req.params.id });
  if (category == null) {
    return res.status(404).json({ message: 'category not found' });
  }
  const updateNews = await news.updateOne(req.params['id'], {
    category:category,
    name: req.body.name,
  });
  try {
    res.status(201).json({ updateNews });
  } catch (err) {
    res.json({ message: err.message });
  }
};

//Delete Sinlge News
exports.remove = async (req, res) => {
  var category = await categoryModel.findOne({ id: req.params.id });
  if (category == null) {
    return res.status(404).json({ message: 'category not found' });
  }
  const deletedNews = await news.deleteOne(req.params['id']);
  try {
    res.status(200).json({ deletedNews: deletedNews });
  } catch (err) {
    res.json({ message: err.message });
  }
};


