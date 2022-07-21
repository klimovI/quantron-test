require('dotenv').config();

const express = require('express');
const superheroRoutes = require('./routes/superhero');

const app = express();

app.use(express.json());
app.use('/superhero', superheroRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
