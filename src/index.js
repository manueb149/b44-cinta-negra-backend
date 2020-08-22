const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

require('./api/database');

app.use(express.json({ extended: true }))

app.use('/v1', require('./api/routes/tasks.routes'));

module.exports = { app, PORT }