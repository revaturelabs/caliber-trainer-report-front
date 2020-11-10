// app.js
const express = require('express');
const http = require('http');
const path = require('path');

// Create Express app
const app = express()

const port = process.env.PORT || 80;

// A sample route
app.use(express.static(path.join(__dirname + './dist/CaliberTrainerReport')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));



// Start the Express server
// app.listen(4200, () => console.log('Server running on port 4200!'))