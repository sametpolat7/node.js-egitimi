const http = require('node:http');

const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error(err);
  });

  res.on('error', (err) => {
    console.error(err);
  });

  if (req.method === 'POST' && req.url === '/echo') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    req.pipe(res);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('Page is not found!');
    res.end();
  }
});

const PORT = 8080;
const hostname = '127.0.0.1';

server.listen(PORT, hostname, () => {
  console.log(`Server listening on http://${hostname}:${PORT}`);
});
