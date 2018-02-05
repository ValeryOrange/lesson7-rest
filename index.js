const restify = require('restify');

const server = restify.createServer();
server.get('/', (req, res, next) => {
  res.send('Hello, human!');
  next();
});

server.get('/hello/:name', (req, res, next) => {
  res.send(`Hello, ${req.params.name}`);
  next();
});

server.post('hello/:name', (req, res, next) => {
  next();
  return {name: req.params.name};
})

server.listen(8080, function() {
  console.log(`${server.name} listening at ${server.url}`);
});
