const express = require('express');
const path = require('path');
const app = express();
const port = 4200;

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/api', (req, res) => {
  res.json({ message: "API is working from EC2!" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
