const express = require('express');
const app = express();
const port = 4000; // Port for the backend server

// A simple test route
app.get('/api', (req, res) => {
  res.send('Hello from the EventSphere Backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});