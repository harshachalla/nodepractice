// var http = require('http');
// http.createServer(function(req,res)
// {
//     res.writeHeader(200,{'contentType':'text/html'});
//     res.end('hello harshavardhan raju');
// }).listen(5050);




var express = require('express');
var app = express();
app.set('view engine','jade');
app.get('/',function(req,res)
{
    // res.writeHeader(200,{'contentType':'text/html'});
         res.end('hello harsha');
});
var server=app.listen(9999,function()
{

});