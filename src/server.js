const express = require('express');

const app = express();

require('./database/database');

app.use(express.json());

module.exports = app;