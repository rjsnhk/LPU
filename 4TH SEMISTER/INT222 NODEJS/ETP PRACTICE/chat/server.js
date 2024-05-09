// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.IO connection handling
let connectedUsers = 0;

io.on('connection', socket => {
    connectedUsers++;
    console.log(`A user connected. Total users: ${connectedUsers}`);

    socket.on('join', username => {
        socket.username = username;
        io.emit('user joined', { message: `${username} has joined the chat`, count: connectedUsers });
    });

    socket.on('chat message', msg => {
        io.emit('chat message', { type: 'message', username: socket.username, message: msg });
    });

    socket.on('disconnect', () => {
        connectedUsers--;
        console.log(`A user disconnected. Total users: ${connectedUsers}`);
        if (socket.username) {
            io.emit('user left', { message: `${socket.username} has left the chat`, count: connectedUsers });
        }
    });
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
