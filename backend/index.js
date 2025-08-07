// eventsphere-backend/index.js

const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 4000;

// Use the cors middleware
app.use(cors()); // This will allow requests from your frontend

app.get('/api', (req, res) => {
  // Send a JSON object instead of just a string
  res.json({ message: 'Hello from the EventSphere Backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});