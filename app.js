const express = require('express');
const path = require('path');
const app = express();
const port = 4200;

// Serve static file directly from root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
