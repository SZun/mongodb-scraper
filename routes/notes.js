const express = require('express');
const router = express.Router();
const Note = require('../models/note');
const Article = require('../models/article')

router.post('/', async (req, res) => {
  try {
    const note = await new Note({
      note: req.body.note
    })
    note => {
      const populate = async (note) => await Article.findByIdAndUpdate(
        {_id: req.body.key},
        {$push: {notes: note._id}}, 
        {new: true})
      const populatedNote = await populate(note)
      res.send(populatedNote);
    }
  }
  catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

module.exports = router;
