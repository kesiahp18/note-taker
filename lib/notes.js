const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');

function createNote(body, notes) {
    const newNote = body;
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return notes;
}

function assignId() {
    id = Date.now();
    console.log(id)
    return id;
}

function validateNote(note) {
    if(!note.title) {
        return false;
    } 
    return true;
}

module.exports = {createNote, assignId, validateNote};