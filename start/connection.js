module.exports = async mongoose => {
  try {
    if (process.env.NODE_ENV === 'production') {
      const connection = await mongoose.connect(process.env.MONGODB_URI);
    } else {
      const connection = await mongoose.connect(
        'mongodb://localhost/mongodb_scraper_hw'
      );
    }
    console.log(`Connected to MongoDB`);
  } catch (err) {
    err => console.log(`Error: ${err.message}`);
  }
};
