const express = require('express');
const { uvPath } = require('@titaniumnetwork-dev/ultraviolet');
const app = express();

// This tells Express to serve the actual UV engine files 
// from the node_modules folder when /uv/ is requested.
app.use('/uv/', express.static(uvPath));

app.get('/api/status', (req, res) => {
  res.json({ status: 'running' });
});

module.exports = app;