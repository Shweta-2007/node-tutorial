const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
  }
  res.end(`
  <h1>Oops!! Something went wrong</h1>
  <a href="/">Back to home?</a>
  `);
});

server.listen(5000);
