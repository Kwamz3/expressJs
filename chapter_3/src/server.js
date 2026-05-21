import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

console.log('Hello world')

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:3000`);
})