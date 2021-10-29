const fs = require('fs');
const path = require('path');

function newNote(body, noteArray) {
	const note = body;
	noteArray.push(note);

	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify(noteArray, 2, null)
	);
	return noteArray;
}

function validateNote(note) {
	if (!note.title || typeof note.title !== 'string') {
		return false;
	}
	if (!note.text || typeof note.text !== 'string') {
		return false;
	}
	return true;
}

function findNoteById(id, noteArray) {
	const note = noteArray.find((note) => note.id === id);
	return note;
}

function deleteNote(body, noteArray) {
	const note = body;
	noteArray.pop(note);

	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify(noteArray, 2, null)
	);
	return noteArray;
}

module.exports = {
	newNote,
	validateNote,
	findNoteById,
	deleteNote,
};
