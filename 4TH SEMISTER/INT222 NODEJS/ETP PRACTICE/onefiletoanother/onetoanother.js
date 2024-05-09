const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const sourceFilePath = 'example.txt';
    const destinationFilePath = 'example2.txt';

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(destinationFilePath);

    readStream.pipe(writeStream);

    readStream.on('error', (err) => {
      console.error('Read stream error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });

    writeStream.on('error', (err) => {
      console.error('Write stream error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });

    writeStream.on('finish', () => {
      console.log('File streamed successfully.');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('File streamed successfully.');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
