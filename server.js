// Demo Code
var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Welcome to Auzre Discovery Day\n');
}).listen(port);   


// var http = require('http')
//   , fs = require('fs'); 
// var port = process.env.PORT || 1337;

// fs.readFile('azure.jpg', function(err, data) {
//   if (err) throw err; // Fail if the file can't be read.
//   http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'image/jpeg'});
//     res.end(data); // Send the file data to the browser.
//   }).listen(port);
//   //console.log('Server running at http://localhost:8124/');
// });

//git push azure master