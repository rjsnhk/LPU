//create a simple node.js server that processes diffferent url paths and query strings

// const http = require('http');
// const url = require('node:url');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);

//   // Handle different paths
//   switch (parsedUrl.pathname) {
//     case '/':
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end('Home page\n');
//       break;
//     case '/about':
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end('About page\n');
//       break;
//     default:
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/plain');
//       res.end('Not found\n');
//   }

//   // Handle query strings
//   if (parsedUrl.query.name) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`Hello, ${parsedUrl.query.name}!\n`);
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



//implement a NODE.JS erver that responds differently based on request

const http = require('http');

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Check the request URL
  if (req.url === '/') {
    res.end('Welcome to the homepage!\n');
  } else if (req.url === '/about') {
    res.end('About us page.\n');
  } else if (req.url === '/contact') {
    res.end('Contact us page.\n');
  } else {
    res.end('Page not found.\n');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
