const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.post('/', async (req, res) => {
  try {
    const newNote = new Note(req.body);
    await newNote.save();
    res.status(201).send('Note created');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;