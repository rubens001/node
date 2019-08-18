const https = require('https');
const fs = require("fs");

// problemas ao chamar remote https com certificado autoassinado
// set NODE_TLS_REJECT_UNAUTHORIZED=0
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

let optionSSL = {
  key: fs.readFileSync('config/key.pem'),
  cert: fs.readFileSync('config/cert.pem')
};

// redirect 8000 -> 9000
https.createServer(optionSSL, onRequest).listen(8000);

function onRequest(request, response) {
  console.log('serve: ' + request.url);
  //if (request.headers.host) { request.headers.host = '127.0.0.1:9000' }
  delete request.headers.host;
  delete request.headers.connection; // keep-alive
  const options = {
    hostname: '127.0.0.1',
    port: 9000,
    path: request.url,
    method: request.method,
    headers: request.headers
  };

  const proxy = https.request(options, function (res) {
    response.writeHead(res.statusCode, res.headers)
    res.pipe(response, {
      end: true
    });
  });

  request.pipe(proxy, {
    end: true
  });
}

// server listen 9000
const server = https.createServer(optionSSL, function (requ, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    resp.write('<html><body><pre>');
    resp.write('requ.method:' + JSON.stringify(requ.method) + '\n');
    resp.write('requ.url:' + JSON.stringify(requ.url) + '\n');
    // resp.write('requ.rawHeaders:' + JSON.stringify(requ.rawHeaders) + '\n');
    resp.write('Proxy Request was Successful:' + '\n' + JSON.stringify(requ.headers, true, 2) + '\n');
    resp.write('</pre></body></html>');
    resp.end();
  });
  
  server.listen(9000);