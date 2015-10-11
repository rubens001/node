var http = require('http'),
    url = require('url'),
    fs = require('fs');
    mime = require('mime');

http.createServer(function(req, res) {
  var uri = url.parse(req.url).pathname;
  var filename = process.cwd().concat(unescape(uri));

  var stats;

  try {
    // throws if path doesn't exist
    stats = fs.lstatSync(filename);
  } catch (e) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found\n');
    res.end();
    return;
  }


  if (stats.isFile()) {
    // path exists, is a file
    res.writeHead(200, {'Content-Type': mime.lookup(filename) || 'application/octet-stream'} );
    var fileStream = fs.createReadStream(filename);
    fileStream.pipe(res);
  } else if (stats.isDirectory()) {
    // path exists, is a directory
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Index of '+uri+'\n');
    res.write('TODO, show index?\n');
    res.end();
  } else {
    // Symbolic link, other?
    // TODO: follow symlinks?  security?
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.write('500 Internal server error\n');
    res.end();
  }

}).listen(8000);