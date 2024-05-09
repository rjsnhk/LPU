const fs = require('fs');
const { Duplex } = require('stream');

// Create a Duplex stream
class FileDuplex extends Duplex {
  constructor(options) {
    super(options);
    this.readableStream = fs.createReadStream('input.txt'); // Read from input.txt
    this.writableStream = fs.createWriteStream('output.txt'); // Write to output.txt
  }

  _read(size) {
    this.readableStream.on('data', (chunk) => {
      this.push(chunk); // Push data from readable stream to Duplex stream
    });
    this.readableStream.on('end', () => {
      this.push(null); // End of data
    });
  }

  _write(chunk, encoding, callback) {
    this.writableStream.write(chunk); // Write data to writable stream
    callback();
  }
}

// Create an instance of the FileDuplex stream
const fileDuplex = new FileDuplex();

// Pipe data from Duplex stream to standard output
fileDuplex.pipe(process.stdout);

// Example: Write data to the Duplex stream
fileDuplex.write('Hello, ');
fileDuplex.write('Duplex stream!');
fileDuplex.end(); // End the stream

console.log('Program completed.');
