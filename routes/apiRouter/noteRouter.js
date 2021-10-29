const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNote, updateNote, deleteNote } = require('../../lib/note');
const { v1: uuidv1, v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
	res.json(notes);
});

router.post('/notes', (req, res) => {
	const newNote = createNote(req.body);
	newNote.id = uuidv4();
	notes.push(newNote);
	res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
	const noteId = req.params.id;
	const note = deleteNote(noteId);
	res.json(note);
});

module.exports = router;
