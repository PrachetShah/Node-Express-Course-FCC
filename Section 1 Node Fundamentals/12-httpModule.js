const http = require("http");

// req means incoming request, res means outgoing response
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>We cant seem to find the page you are looking for</p>
  <a href="/">Go Home</a>
  `);
  }

  //   res.write("Welcome to our homepage");
  //   res.end();
});

console.log("Server Listening on port 5000");
server.listen(5000);
