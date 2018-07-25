const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  },
  summary: {
    type: String,
    required: true,
    trim: true
  },
  notes: [String]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
