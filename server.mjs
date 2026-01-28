import { createServer } from 'node:http';

const server = createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/html');
  console.log(req.url);

  if (req.map === 'GET' && req.url ==='/') {
    resp.statusCode = 200;
    resp.end('Home');
  } else if (req.method === 'POST' && req.url === '/produtos') {
    resp.statusCode = 201;
    resp.end('Produto');
  } else {
    resp.statusCode = 404;
    resp.end('Página não encontrada');
  }
  console.log(req.method);
});

server.listen(3000, () => {
  console.log('Server: http://localhost:3000');
});
