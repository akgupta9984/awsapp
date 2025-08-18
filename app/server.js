// app/server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static assets from /public (we'll store big assets on S3)
app.use('/static', express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ status: 'ok', message: 'Hello from EC2-deployed Node.js app!' });
});

// simple about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Health check for load balancers / monitoring
app.get('/health', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
