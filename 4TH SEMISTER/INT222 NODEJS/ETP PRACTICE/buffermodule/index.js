const fs = require('fs');

// Function to copy data from one file to another using buffers
function copyFile(sourceFile, destinationFile) {
  // Create a readable stream from the source file
  const readStream = fs.createReadStream(sourceFile);
  // Create a writable stream for the destination file
  const writeStream = fs.createWriteStream(destinationFile);

  // Attach event listeners to handle data copying
  readStream.on('data', (chunk) => {
    // Write each chunk of data to the destination file
    writeStream.write(chunk);
  });

  // When all data has been read, close the writable stream
  readStream.on('end', () => {
    writeStream.end();
    console.log('File copied successfully.');
  });

  // Handle errors during the copying process
  readStream.on('error', (err) => {
    console.error('Error reading file:', err);
  });
  writeStream.on('error', (err) => {
    console.error('Error writing file:', err);
  });
}

// Usage example: copy 'source.txt' to 'destination.txt'
const sourceFile = 'source.txt';
const destinationFile = 'destination.txt';
copyFile(sourceFile, destinationFile);
