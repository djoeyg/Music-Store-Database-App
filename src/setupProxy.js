// This file allows for the use of a proxy server to run on the 
// same port as the backend API during development since the
// "react-scripts" version 5 dependency no longer works with 
// "proxy": "http://localhost:PORT" included in package.json
// https://stackoverflow.com/questions/70374005/invalid-options-object-dev-server-has-been-initialized-using-an-options-object

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:37714',
      changeOrigin: true,
    })
  );
};