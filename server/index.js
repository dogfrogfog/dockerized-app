const http = require('http');

const MOCK_DATA = require('./mock-data.json');

const PORT = 8080;
const ENDPOINTS = {
  fruit: '/api/fruits'
};
const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const server = http.createServer(function (request, response) {
  // refactor
  const endpoint = request.url.split('?')[0];

  if (endpoint === ENDPOINTS.fruit) {
    const randImage = MOCK_DATA.data[(Math.random() * MOCK_DATA.data.length) | 0];

    response.writeHead(200, HEADERS);
    response.write(JSON.stringify(randImage));
    response.end();
  }
});

server.listen(PORT);