import express from 'express';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';
import { createServer } from 'node:http';

const app = express();

// This serves the missing uv.sw.js, uv.bundle.js, etc.
app.use('/uv/', express.static(uvPath));

// Serve your frontend static files (index.html, etc.)
app.use(express.static('public')); 

// For Vercel, we export the app. 
// We keep the listen check so it still works locally.
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log('Running on http://localhost:3000'));
}

export default app;