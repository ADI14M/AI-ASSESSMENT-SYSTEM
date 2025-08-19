const express = require('express');
const mongoose = require('./db'); // your db.js file

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running and connected to MongoDB!');
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
