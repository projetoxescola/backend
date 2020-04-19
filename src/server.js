const express = require('express');

const app = express();
const provaRoute = require('./routes/provaRoute');

require('./database/database');

app.use(express.json());

app.use('/escola/prova', provaRoute)

module.exports = app;