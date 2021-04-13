require('dotenv').config()

const express = require('express');
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet')
const cors = require('cors')

const indexRouter = require('./routes/index');

const app = express();

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: 'http://localhost:3000'}))

app.use('/', indexRouter);

/* Get Express app to serve up React app */
app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
