const http = require('node:http');

const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(`A ${req.method} request has been received for URL: ${url}`);

    res.writeHead(200, {'Content-Type': 'text/html'});

    switch (url) {
        case '/':
            res.write('<h1>Root Page</h1>');
            break;
        case '/about':
            res.write('<h1>About Page</h1>');
            break;
        case '/contact':
            res.write('<h1>Contact Page</h1>');
            break;
        default:
            res.write('<h1>404 Not Found</h1>')
    }
    res.end();
})

server.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`);
})
