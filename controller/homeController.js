const asyncHandler = require('express-async-handler');

exports.getHomeController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Data sent' });
});

exports.putHomeController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Set Data sent' });
});

exports.deleteHomeController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted data ${req.params.id}` });
});
