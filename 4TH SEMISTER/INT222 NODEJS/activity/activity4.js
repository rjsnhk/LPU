//parse a json file modify its content and save the changes
// const fs = require('fs');

// // Read the JSON file
// fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }

//   try {
//     // Parse the JSON data
//     const jsonData = JSON.parse(data);

//     // Modify the content
//     jsonData.someKey = 'newValue';

//     // Convert the modified data back to JSON
//     const modifiedData = JSON.stringify(jsonData, null, 2); // 2 is for indentation

//     // Write the modified data back to the file
//     fs.writeFile('data.json', modifiedData, (err) => {
//       if (err) {
//         console.error('Error writing file:', err);
//         return;
//       }
//       console.log('Changes saved successfully.');
//     });
//   } catch (error) {
//     console.error('Error parsing JSON:', error);
//   }
// });



// //compress a file decompress it and compare the sizes
const fs = require('fs');
const zlib = require('zlib');

const fileName = 'example.txt';

// Create a readable stream from the file
const readStream = fs.createReadStream(fileName);

// Create a writable stream for compressed data
const compressStream = zlib.createGzip();

// Create a writable stream for decompressed data
const decompressStream = zlib.createGunzip();

// Pipe the readStream to the compressStream
readStream.pipe(compressStream)
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
