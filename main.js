var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from Cloud9\n');
}).listen(process.env.PORT);
var stream = require('getstream');
// Instantiate a new client (server side)
client = stream.connect('qmkdwuxdqucp', '9h66y7vmjkdtzj5fa5jf5dhr7tny5k7wtc3qb67znj92e7ae4egkrnufdgt5fq78', '11521');
// Instantiate a new client (client side)
client = stream.connect('qmkdwuxdqucp', null, '11521');
// Find your API keys here https://getstream.io/dashboard/

// Instantiate a feed using feed class 'user' and user id '1'
var user1 = client.feed('user', '1');
// Instantiate a feed for feed group 'user', user id '1' and a security token generated server side
user1 = client.feed('user', '1', $token);
// Add an activity to the feed
var activity = {"actor": "User:2", "verb": "pin", "object": "Place:42", "target": "Board:1"};

// Asynchronous methods return Promise since v3.0.0
user1.addActivity(activity)
    .then(function(data) { /* on success */ })
    .catch(function(reason) { /* on failure, reason.error contains an explanation */ });