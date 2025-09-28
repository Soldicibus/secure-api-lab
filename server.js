const express = require('express');
const { documents, employees } = require('./data.js');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! The server is running.');
});

app.get('/documents', (req, res) => {
    res.status(200).json(documents);
});

app.post('/documents', (req, res) => {

    const newDocument = req.body;

    newDocument.id = Date.now();
    documents.push(newDocument);

    res.status(201).json(employees);
});

app.get('/employees', (req, res) => {
    res.status(200).json(employees);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});