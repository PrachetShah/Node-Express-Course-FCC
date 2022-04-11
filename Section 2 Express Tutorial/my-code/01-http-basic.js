const http = require("http");

const server = http.createServer((req, res) => {
  // Response can be sent via both res.end and res.write
  // but it is better practise to sent it through res.write and then call it using res.end

  // console.log(req.method);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>Home Page</h1>`);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Page</h1>`);
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>Contact Page</h1>`);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Page not found</h1>`);
    res.end();
  }
});

server.listen(5000);
