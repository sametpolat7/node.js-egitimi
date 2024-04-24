const http = require("http");

const server = http.createServer((req, res) => {
  console.log("A GET request has been recieved");
  const url = req.url;

  res.writeHead(200, { "Content-Type": "text/json" });

  switch (url) {
    case "/":
      res.write("<h1>Root Sayfasi</h1>");
      break;
    case "/about":
      res.write("<h1>About Sayfasi</h1>");
      break;
    case "/contact":
      res.write("Contact Sayfasi");
      break;
    default:
      res.write("404");
  }
  res.end();
});

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}`);
});
