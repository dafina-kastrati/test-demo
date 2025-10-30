const express = require('express');
const app = express();

app.use(express.json());

// Beispiel-Route
app.get('/api/scooters', (req, res) => {
  const scooters = [
    { id: 1, name: 'Scooter A' },
    { id: 2, name: 'Scooter B' },
  ];
  res.json(scooters);
});

// Beispiel-POST-Route
app.post('/api/scooters', (req, res) => {
  const newScooter = req.body;
  newScooter.id = 3; // Fake-ID
  res.status(201).json(newScooter);
});

module.exports = app;
