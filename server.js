// server.js
const express = require('express');
const app = express();
const port = 5000;

// Test route to simulate backend API response
app.get('/api/data', (req, res) => {
   res.json({ message: "Data from backend" });
});

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
