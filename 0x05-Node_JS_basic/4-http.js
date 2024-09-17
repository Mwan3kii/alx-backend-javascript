// 4-http.js

const http = require('http');

const PORT = 1245;

const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write the response
  res.end('Hello Holberton School!\n');
});

// Start the server and listen on port 1245
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
