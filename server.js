const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Nova Demo Widget</h1><p>This is a placeholder demo app.</p>');
});

server.listen(port, () => {
  console.log(`Nova demo widget listening on port ${port}`);
});
