const http = require("http");
const cron = require("node-cron");
// const host = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!");
});

server.listen(port, () => {
  console.log("Web server running at http://%s:%s", port);

  cron.schedule("30 * * * * *", () => {
    console.log("task submitted successfully ");
  });
});
