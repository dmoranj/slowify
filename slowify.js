var http = require('http'),
    httpProxy = require('http-proxy'),
    config = require('./config');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  setTimeout(function() {
    proxy.web(req, res, { target: config.target });
  }, config.delay);
});

console.log('Slowify created on port [%s] for target [%s]', config.port, config.target);
server.listen(config.port);
