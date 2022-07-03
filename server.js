const express = require('express');
const { animals } = require('./data/animals');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const PORT = process.env.PORT || 3008;








app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, './public/animals.html'));
});

app.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(3008, () => {
    console.log(`API server now on port 3008!`)
});

