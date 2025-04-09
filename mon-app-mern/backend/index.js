const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://mongo:27017/test');

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
