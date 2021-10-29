const fs = require('fs');
const path = require('path');

function newNote(title, body) {
	this.title = title;
	this.body = body;
}

fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify([]));
return newNote;

function validateNote(title, body) {
	if (!title || !body) {
		return false;
	}
	return true;
}

function findNodeById(id) {
	const notes = loadNotes();
	const note = notes.find((note) => note.id === id);
	if (!note) {
		return false;
	}
	return note;
}

function deleteNote(id) {
	const notes = loadNotes();
	const noteIndex = notes.findIndex((note) => note.id === id);
	if (noteIndex === -1) {
		return false;
	}
	notes.splice(noteIndex, 1);
	saveNotes(notes);
	return true;
}

module.exports = {
	newNote,
	validateNote,
	findNodeById,
	deleteNote,
};
