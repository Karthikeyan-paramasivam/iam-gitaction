const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, 'Index.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  }

  else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      console.log('✅ Submit button clicked');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Submit received');
    });
  }

  else if (req.method === 'POST' && req.url === '/upload') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      console.log('📁 Upload triggered (file upload not handled here)');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Upload received');
    });
  }

  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://34.56.132.32:${3000}`);
});