const express = require('express');
const { add } = require('./utils');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('Hello from Docker CI/CD! New message');
});

app.get('/add/:a/:b', (req, res) => {
	const a = Number(req.params.a);
	const b = Number(req.params.b);
	res.send(`Result: ${add(a, b)}`);
});

app.listen(port, '0.0.0.0', () => {
	console.log(`Server running on port ${port}`);
});

console.log("test CI")