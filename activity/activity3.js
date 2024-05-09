// assign a task to read a file,modifyits content and save the changes

// const fs = require('fs').promises;

// async function modifyFileAsync(filePath) {
//     try {
//         const fileContent = await fs.readFile(filePath, 'utf-8');

//         const modifiedContent = fileContent + '\nModified Content';

//         await fs.writeFile(filePath, modifiedContent);

//         console.log('File modified successfully.');
//     } catch (err) {
//         console.error('Error modifying file:', err);
//     }
// }

// const filePath = 'activity3.txt';
// modifyFileAsync(filePath);


// assign a task use buffer to read and write binary data from/to a file in node js

const fs = require('fs');

function readBinaryData(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


function writeBinaryData(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

// usage
async function main() {
    const filePath = 'activity3.bin';

    // Read binary data from a file
    try {
        const binaryData = await readBinaryData(filePath);
        console.log('Read binary data:', binaryData);
    } catch (err) {
        console.error('Error reading binary data:', err);
    }

    // Write binary data to a file
    const binaryDataToWrite = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
    try {
        await writeBinaryData(filePath, binaryDataToWrite);
        console.log('Binary data written successfully.');
    } catch (err) {
        console.error('Error writing binary data:', err);
    }
}

main();

