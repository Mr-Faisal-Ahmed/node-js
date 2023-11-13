let http = require('http');
var dt = require('./math');

http.createServer(function(req, res) {
    res.end('the total sum is' + dt.sum(2,3));
    
}).listen(8200);