require("dotenv").config();

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const fs = require("fs");
let directory_name = "./";
let filenames = fs.readdirSync(directory_name);

const SECRET = process.env.SECRET;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  let fileList = filenames.join("\n") + `\nSECRET: ${SECRET}`;
  res.end(fileList);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
