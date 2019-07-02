const express = require('express');

const app = express();

// Initialize application
require('./startup/bootstrap')(app);

// Register routes
require('./startup/register-controllers')(app);

// Register swagger api docs
require('./startup/register-swagger')(app);

// Register global handlers
require('./handlers/error-handler')(app);

module.exports = app;
