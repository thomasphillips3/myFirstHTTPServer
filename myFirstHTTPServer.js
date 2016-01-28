// Tutorial from: http://blog.modulus.io/build-your-first-http-server-in-nodejs

// Import modules
var http = require('http');
var dispatcher = require('httpdispatcher');

// Define listening port
const PORT = 8080;

// Handle requests and send response
function handleRequest(request, response){
  try{
    console.log(request.url);
    dispatcher.dispatch(request, response);
  } catch(err) {
    console.log(err);
  }
}

// Create a server
var server = http.createServer(handleRequest);

// Start server
server.listen(PORT, function(){
  // This code runs when the server is listening
  console.log("Server listening on: http://localhost:%s", PORT);
})

dispatcher.setStatic("resources");

// Sample GET request
dispatcher.onGet("/page1", function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Page One');
});

// Sample POST request
dispatcher.onPost("/page1", function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Got Post Data');
});
