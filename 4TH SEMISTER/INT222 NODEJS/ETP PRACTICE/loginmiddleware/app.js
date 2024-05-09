// Import necessary modules
const express = require('express');
const fs = require('fs');

// Create an instance of express
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Simulated user database
const users = [
  { id: 1, username: 'John', password: 'Wick' },
  { id: 2, username: 'Babu', password: 'Rao' }
];

// Middleware function for authentication
app.use('/profile', (req, res, next) => {
  // Extract username and password from request body
  const { username, password } = req.body;
  // Find user in the database
  const user = users.find(u => u.username === username && u.password === password);
  // If user is found, set it on the request object and proceed to next middleware
  if (user) {
    req.user = user;
    next();
  } else {
    // If user is not found, send 401 Unauthorized response
    res.status(401).send('Unauthorized');
  }
});

// Public route
app.get('/', (req, res) => {
  res.send('Welcome to the public route!');
});

// Route to serve login form
app.get('/login', (req, res) => {
  fs.readFile(__dirname + '/public/index.html', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.send("Error Displaying Form");
    } else {
      res.end(data);
    }
  });
});

// Protected route
app.post('/profile', (req, res) => {
  res.send(`Welcome ${req.user.username}!`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
