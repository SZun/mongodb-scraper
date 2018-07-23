const mongoose = require("mongoose");

const scrapeSchema = new mongoose.Schema({
  scrape: {
    type: Array
  }
});

const Scrape = mongoose.model("Scrape", scrapeSchema);

module.exports = Scrape;
