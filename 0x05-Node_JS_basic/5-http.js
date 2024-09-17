// 5-http.js

const http = require('http');
const countStudents = require('./3-read_file_async'); // Import the function from 3-read_file_async

const host = '127.0.0.1';
const PORT = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handle the root path
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Handle the /students path
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    // Get the file path from the command line arguments
    const filePath = process.argv[2];

    countStudents(filePath)
      .then(() => {
        res.end(); // End the response after countStudents completes
      })
      .catch((error) => {
        res.write('Error: Cannot load the database\n');
        res.end(); // End the response after an error
      });
  } else {
    // Handle all other paths
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

// Start the server and listen on port 1245
app.listen(PORT, host, () => {
  console.log(`Server is listening on ${host}:${PORT}`);
});

module.exports = app;
