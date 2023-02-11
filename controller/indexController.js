const Index = require('../models/index');

// Get All News Feed
exports.getNews = async (req, res) => {
  try {
    const news = await Index.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Get Single News
exports.getSingleNews = async (req, res) => {
  const news = await Index.findById(req.params.id);
  if (news != null) {
    return res.status(200).json({ news: news });
  }
};

//Create Single News
exports.postNews = async (req, res) => {
  const newsFeed = new Index({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
  });
  const newNews = await newsFeed.save();
  res.status(201).json(newNews);
};

//Delete Sinlge news
exports.deleteNews = async (req, res) => {
  const deletedNews = await Index.deleteMany();
  try {
    res.status(200).json({ deletedNews: deletedNews });
  } catch (err) {
    res.json({ message: err.message });
  }
};

//Delete All news
exports.deleteAllNews = async (req, res) => {
  const deletedNews = await Index.deleteMany();
  res.status(200).json({ deletedNews: deletedNews });
};
