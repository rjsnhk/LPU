// chat.js
const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const userCountDisplay = document.getElementById('user-count');

form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

const username = prompt('Please enter your name:');
socket.emit('join', username);

socket.on('chat message', data => {
    const item = document.createElement('li');
    if (data.type === 'notification') {
        item.textContent = data.message;
        item.style.fontWeight = 'bold';
    } else {
        item.textContent = `${data.username}: ${data.message}`;
    }
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});

socket.on('user joined', data => {
    const item = document.createElement('li');
    item.textContent = data.message;
    item.style.fontWeight = 'bold';
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
    updateUsersCount(data.count);
});

socket.on('user left', data => {
    const item = document.createElement('li');
    item.textContent = data.message;
    item.style.fontWeight = 'bold';
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
    updateUsersCount(data.count);
});

function updateUsersCount(count) {
    userCountDisplay.textContent = `Users online: ${count}`;
}
