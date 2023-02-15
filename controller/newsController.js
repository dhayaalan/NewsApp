const news = require('../models/news');

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
  const newsFeed = new news({
    headlines: req.body.headlines,
    image: req.body.image,
    description: req.body.description,
  });
  const newNews = await newsFeed.save();
  res.status(201).json(newNews);
};

//update single News
exports.modifies = async (req, res) => {
  const updateNews = await news.updateOne(req.params['id'], {
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
  const deletedNews = await news.deleteOne(req.params['id']);
  try {
    res.status(200).json({ deletedNews: deletedNews });
  } catch (err) {
    res.json({ message: err.message });
  }
};

//Delete All News
exports.deleteList = async (req, res) => {
  const deletedNews = await news.deleteMany();
  res.status(200).json({ deletedNews: deletedNews });
};
