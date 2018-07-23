module.exports = async mongoose => {
  try {
    const connection = await mongoose.connect(
      'mongodb://localhost/mongodb_scraper_hw'
    );
    console.log(`Connected to MongoDB`);
  } catch (err) {
    err => console.log(`Error: ${err.message}`);
  }
};
