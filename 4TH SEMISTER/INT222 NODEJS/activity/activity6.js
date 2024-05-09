//Assign a task: Implement a simple Express application with custom middleware.


//Assign a task: Build an Express application that handles both GET and POST requests.

const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

app.use((req, res, next) => {
	console.log(Request method: ${req.method}, Request URL: ${req.url});
	next();
});

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>');
});

app.post('/data', (req, res) => {
	res.json(req.body);
});

app.listen(port, () => {
	console.log(Server is running at http://localhost:${port});
});