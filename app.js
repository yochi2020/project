const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const errorHandle = require("./middleware/errorHandle")

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require("./routes/routes"))

app.use(errorHandle)
module.exports = app;
