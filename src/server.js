const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.json({'menssagem': 'Bem vindo'})
})

module.exports = app;