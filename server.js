const express = require('express');
const app = express();
const PORT = 3000;

// *** Website endpoints ***

app.get('/', (req, res) => {
    res.send('<h1>homepage</h1>');
})

app.get('/dashboard', (req, res) => {
    res.send('<h1>dashboard</h1>');
})

// *** API endpoints ***



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
})