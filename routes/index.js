const routes = require('express').Router();

const sendEmail = require('./sendEmail');

routes.use('/send-email', sendEmail);

module.exports = routes;