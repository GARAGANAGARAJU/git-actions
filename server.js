const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Sample API endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is sample data from the API' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
