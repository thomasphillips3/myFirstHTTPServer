// Tutorial from: http://blog.modulus.io/build-your-first-http-server-in-nodejs

// Import HTTP Module
var http = require('http');

// Define listening port
const PORT = 8080;

// Handle requests and send response
function handleRequest(request, response){
  response.end('Path Hit: ' + request.url)
}

// Create a server
var server = http.createServer(handleRequest);

// Start server
server.listen(PORT, function(){
  // This code runs when the server is listening
  console.log("Server listening on: http://localhost:%s", PORT);
})
