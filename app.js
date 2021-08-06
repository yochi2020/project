const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const errorHandle = require("./util/errorHandle")
const providerRoutes = require("./routes/providersRoute")

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/providers",providerRoutes)

app.use(errorHandle)
module.exports = app;
