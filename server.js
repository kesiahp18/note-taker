const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path =require('path');
const htmlRoutes = require('./routes/htmlRoutes')

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', htmlRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});