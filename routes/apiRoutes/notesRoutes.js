const router = require('express').Router();
const notes = require('../../db/db.json');
const { assignId, validateNote, createNote } = require('../../lib/notes');

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

module.exports = router;