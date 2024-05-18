const http = require('http');
const colors = require('colors');

const PORT = 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('Hello, world!');
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.rainbow);
});
