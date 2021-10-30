const router = require('express').Router();
const notes = require('../../db/db.json');
const {
	createNote,
	validateNote,
	findNoteById,
	deleteNote,
} = require('../../lib/note');
const { v1: uuidv1, v4: uuidv4 } = require('uuid');
const { response } = require('express');

// get all notes from db.json file
router.get('/notes', (req, res) => {
	let result = notes;
	res.json(notes);
});

// post route to add new note to db.json file
router.post('/notes', (req, res) => {
	req.body.id = uuidv4();

	if (!validateNote(req.body)) {
		return res.status(400).json({ error: 'Invalid note' });
	} else {
		const newNote = createNote(req.body);
		notes.push(newNote);
		res.json(newNote);
	}
});

// delete route to delete note from db.json file
router.delete('/notes/:id', (req, res) => {
	let result = findNoteById(req.params.id, notes);
	deleteNote(note, notes);
	res.json(result);
});

module.exports = router;
