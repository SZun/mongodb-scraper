const express = require('express');
const router = express.Router();
const Article = require('../models/article');

router.post('/', async (req, res) => {
  try {
    let article = new Article({
      headline: req.body.headline,
      link: req.body.link,
      summary: req.body.summary
    });
    article = await article.save();
    res.send(article);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

router.get('/', async (req, res) => {
  try {
    const article = await Article.find();
    res.send(article);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

module.exports = router;
