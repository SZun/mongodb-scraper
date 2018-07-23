const express = require('express');
const router = express.Router();

const cheerio = require('cheerio');
const request = require('request');

const Scrape = require('../models/scrape');

const results = [];

router.post('/', async (req, res) => {
  try {
    scrapeNews();
    let scrape = new Scrape({ scrape: results });
    scrape = await scrape.save();
    res.send(scrape);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

router.get('/', async (req, res) => {
  try {
    const scrape = await Scrape.findOne({}).sort('created');
    res.send(scrape);
  } catch (err) {
    console.log(`Error ${err.message}`);
  }
});

function scrapeNews() {
  request(
    'http://www.foxnews.com/category/tech/topics/computers.html',
    (error, response, html) => {
      const $ = cheerio.load(html);
      $('h2.title').each(function(i, element) {
        const headline = $(element)
          .children()
          .text()
          .trim();
        const link = $(element)
          .children()
          .attr('href');
        const data = {
          headline: headline,
          link: link
        };
        results.push(data);
      });
      $('p.dek').each(function(i, element) {
        const summary = $(element)
          .children()
          .text()
          .trim();
        const data = {
          summary: summary
        };
        results.push(data);
      });
      console.log(results);
    }
  );
}

module.exports = router;
