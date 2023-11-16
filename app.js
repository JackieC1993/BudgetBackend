const express = require('express');
const app = express();
const cors = require('cors');
const transactionsController = require('./controllers/transactionsController');

app.use(cors());
app.use(express.json());

app.use('/transactions', transactionsController);

app.get('/', (req, res) => {res.status(404),res.json({message: "Not found"})});


module.exports = app;