const http = require('http');
const proxy = require('http-proxy');

// redirect 8000 -> 9000
const proxyServer = proxy.createProxyServer({target:'http://127.0.0.1:9000', hostRewrite: true });
proxyServer.listen(8000);

// server listen 9000
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<html><body><pre>');
  res.write('req.method:' + JSON.stringify(req.method) + '\n');
  res.write('req.url:' + JSON.stringify(req.url) + '\n');
  // res.write('req.rawHeaders:' + JSON.stringify(req.rawHeaders) + '\n');
  res.write('Proxy Request was Successful:' + '\n' + JSON.stringify(req.headers, true, 2) + '\n');
  res.write('</pre></body></html>');
  res.end();
});

server.listen(9000);