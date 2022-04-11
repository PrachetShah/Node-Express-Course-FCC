const http = require("http");

const server = http.createServer((req, res) => {
  // Response can be sent via both res.end and res.write
  // but it is better practise to sent it through res.write and then call it using res.end
  res.writeHead(200, { "content-type": "text/html" });
  res.write(`<h1>Home Page</h1>`);
  res.end();
});

server.listen(5000);
