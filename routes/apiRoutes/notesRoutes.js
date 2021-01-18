const router = require('express').Router();
const notes = require('../../db/db.json');
const { assignId, validateNote, createNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = assignId();
    if (!validateNote(req.body)) {
        res.status(400).send('No note title entered');
    } else {
        const note = createNote(req.body, notes);
        res.json(note);
    }
})

router.delete('/notes/:id', (req,res) => {
    const noteId = parseInt(req.params.id);
    deleteNote(noteId, notes);
    res.send("Note deleted");
})

module.exports = router;