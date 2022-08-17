const http = require("http");

const server = http.createServer((req, res,err) => {
  if (req.url === "/") {
    res.end("YOU are in the home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Hello I am satyam");
    return;
  }
  res.end(
    `
       <h1>Opps</h1>
       <br>
       <p>The requested home page not available</p>
       <a href="/">Click to go home PAGE</a>
       `
  );
});

server.listen(4000);
