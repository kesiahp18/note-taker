const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
});

module.exports = router;