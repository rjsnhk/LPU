const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('Client connected');

  let intervalId;

  // Send "wow server" message every 2 seconds
  intervalId = setInterval(() => {
    socket.emit('message', 'wow server');
  }, 2000);

  // Stop sending messages after 12 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Stopped sending messages for 5 seconds');
    setTimeout(() => {
      // Start sending messages again after 5 seconds
      intervalId = setInterval(() => {
        socket.emit('message', 'wow server');
      }, 2000);
    }, 5000);
  }, 12000);

  socket.on('disconnect', () => {
    clearInterval(intervalId);
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
