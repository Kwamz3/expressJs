const express = require("express");
const app = express();
const PORT = 3000;

let data = ['James']

// *** Middleware ***
app.use(express.json())

// *** Website endpoints ***
app.get("/", (req, res) => {
  res.send(`
        <style>
            body{
                background-color: beige;
                color: brown;
            }
        </style>
        <body>
            <h1>Data:</h1>
            <p>
                ${JSON.stringify(data)}
            </p>
        </body>
        `);
});

app.get("/dashboard", (req, res) => {
  res.send("<h1>dashboard</h1>");
});

// *** API endpoints ***
app.get("/api/data", (req, res) => {
  res.send(data);
});

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    data.push(newEntry.name)
    console.log(newEntry);
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('Deleted successfully')
    res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
