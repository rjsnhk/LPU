const fs = require('fs');
const path = require('path');

// Middleware function to log incoming requests
function requestLogger(req, res, next) {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  const logFilePath = path.join(__dirname, 'request.log');

  // Append log message to the file
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error appending to request log:', err);
    }
  });

  // Continue to the next middleware
  next();
}

// Example Express.js app using the requestLogger middleware
const express = require('express');
const app = express();

// Use the requestLogger middleware for all routes
app.use(requestLogger);

// Define your routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
