const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const { body, validationResult } = require("express-validator");
// Router 1 for getting all notes using get method

try {
  router.get("/fetchallnote", fetchuser, async (req, res) => {
    const note = await Note.find({ user: req.user.id });
    res.json(note);
  });
} catch (error) {
  console.log(error.message);
  res.status(500).send(" Some Error occured");
}
// Router 2 for getting all notes using get method

router.post("/addnote", fetchuser, async (req, res) => {
  body("title", "Enter a valid name").isLength({ min: 3 }),
    body("description", " give correct email").isLength({ min: 5 });

  try {
    const { title, description, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Note({
      title,
      description,
      tag,
      user: req.user.id,
    });
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    console.log(error);
    res.status(401).send({ error: "error" });
  }
});

// Router 3 for updating all notes using put method
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};

  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }
  try {
    // console.time("Find Note");
    let note = await Note.findById(req.params.id);
    // console.timeEnd("Find Note");

    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // console.time("Update Note");
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    // console.timeEnd("Update Note");

    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
// Router 4 for deleting all notes using delete method
// router.delete("/deletenote/:id", fetchuser, async (req, res) => {

//   try {
//     let note = await Note.findById(req.params.id);

//     if (!note) {
//       return res.status(404).send("Not Found");
//     }

//     if (note.user.toString() !== req.user.id) {
//       return res.status(401).send("Not Allowed");
//     }

//     console.time("Deleted Note");
//     note = await Note.findByIdAndDelete(
//       req.params.id,
//       { $set: newNote },
//       { new: true }
//     );
//     res.json({ Success: "Note is deleted" });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    // Check if the note exists
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Check if the user owns the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    // Delete the note
    // console.time("Deleted Note");
    await Note.findByIdAndDelete(req.params.id);
    // console.timeEnd("Deleted Note");

    res.json({ Success: "Note is deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router;
