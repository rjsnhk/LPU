// Step 1: Install Node.js and npm if you haven't already.
// Step 2: Create a new directory for your project.
// Step 3: Initialize a new Node.js project using npm.
// Run: npm init -y

// Step 4: Install Express.js.
// Run: npm install express

// Step 5: Create your Express application file (e.g., app.js).
// Step 6: Implement custom middleware functions.

const express = require('express');
const app = express();

// Custom middleware to log incoming requests
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Pass control to the next middleware/route handler
}

// Custom middleware to authenticate users (dummy implementation)
function authenticate(req, res, next) {
    const authToken = req.headers.authorization;
    if (authToken && authToken === 'myAuthToken') {
        next(); // User authenticated, pass control to the next middleware/route handler
    } else {
        res.status(401).send('Unauthorized');
    }
}

// Step 7: Set up routes and use the custom middleware.

// Use the logger middleware for all routes
app.use(logger);

// Use the authenticate middleware for specific routes
app.get('/secure', authenticate, (req, res) => {
    res.send('Access granted to secure route!');
});

// Route without authentication
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Step 8: Test your application to ensure everything is working correctly.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
