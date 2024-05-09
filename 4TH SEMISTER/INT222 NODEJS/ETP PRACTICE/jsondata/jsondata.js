const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Check if the request is for '/data'
  if(req.url=='/'){
    res.end("go to /data to see the json data");
  }
  else if (req.url === '/data' && req.method === 'GET') {
    // Read the JSON data from the file asynchronously
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
      if (err) {
        // If there's an error reading the file, return 500 Internal Server Error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        // Set the response headers for JSON content
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Send the JSON data from the file as the response
        res.end(data);
      }
    });
  } else {
    // For any other endpoint, return 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
