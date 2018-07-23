const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.post('/', async (req, res) => {
  try {
    let note = new Note({
      note: req.body.note
    });
    note = await note.save();
    res.send(note);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

router.get('/', async (req, res) => {
  try {
    const note = await note.find();
    res.send(note);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});

module.exports = router;
