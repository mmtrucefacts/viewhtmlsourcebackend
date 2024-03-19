const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT environment variable, or default to 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/fetchHTML', async (req, res) => {
    try {
        const url = req.query.url;
        const response = await fetch(url);
        const html = await response.text();
        res.send(html);
    } catch (error) {
        res.status(500).send('Error fetching HTML: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
