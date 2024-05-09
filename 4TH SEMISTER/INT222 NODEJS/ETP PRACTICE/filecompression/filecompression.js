const fs = require('fs');
const zlib = require('zlib');

const fileName = 'example.txt';


// Create a writable stream for compressed data
const compressStream = zlib.createGzip();

// Create a writable stream for decompressed data
const decompressStream = zlib.createGunzip();

// Pipe the readStream to the compressStream
fs.createReadStream(fileName).pipe(compressStream)
  .on('error', (err) => {
    console.error('Compression error:', err);
  })
  .pipe(fs.createWriteStream(`${fileName}.gz`))
  .on('finish', () => {
    console.log('File compressed successfully.');

    // Get the size of the compressed file
    const compressedSize = fs.statSync(`${fileName}.gz`).size;

    // Pipe the compressed file to decompressStream
    fs.createReadStream(`${fileName}.gz`)
      .pipe(decompressStream)
      .on('error', (err) => {
        console.error('Decompression error:', err);
      })
      .pipe(fs.createWriteStream(`${fileName}_decompressed.txt`))
      .on('finish', () => {
        console.log('File decompressed successfully.');

        // Get the size of the decompressed file
        const decompressedSize = fs.statSync(`${fileName}_decompressed.txt`).size;

        // Compare sizes
        console.log(`Original file size: ${fs.statSync(fileName).size} bytes`);
        console.log(`Compressed file size: ${compressedSize} bytes`);
        console.log(`Decompressed file size: ${decompressedSize} bytes`);

        // Cleanup: delete compressed and decompressed files
        fs.unlinkSync(`${fileName}.gz`);
        fs.unlinkSync(`${fileName}_decompressed.txt`);
      });
  });
