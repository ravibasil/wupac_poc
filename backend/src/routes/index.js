const express = require('express');
const { getAnalytics } = require('../controller/browserHistory');

module.exports = (app) => {
  app.post('/analytics', getAnalytics);
}