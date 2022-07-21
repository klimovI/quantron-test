require('dotenv').config();

const express = require('express');
const superheroRoutes = require('./routes/superhero');

const app = express();

app.use(express.json());
app.use('/superhero', superheroRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
