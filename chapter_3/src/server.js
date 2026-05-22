import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 3000

// getting the file path from the current module
const __filename = fileURLToPath(import.meta.url)

// getting the directory name from the file path
const __dirname = dirname(__filename)

// *** Middleware ***
// enable the interpretation of json
app.use(express.json());

// serving the html from the public folder
// telling express to serve all files from the public folder
app.use(express.static(path.join(__dirname, '../public')));


// serving up the frontend from the public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:3000`);
})