
const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
  if(req.url=='/'){
    res.end("go to /product to see the json data");
  }
  else if (req.url === '/product') {
    fs.readFile(path.join(__dirname, 'product.json'), 'utf8', (err, data) => {
      if (err) {
        res.end('error occured');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});


server.listen(3000, () => {
  console.log(`you enabled the port 3000 you can use now`);
});
