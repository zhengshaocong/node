var http = require('http');
var url=require('url')
const makeRequire=require('node_modules_my/db')
makeRequire.add('666')
http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-type':"text/html;charse=UTF-8"
    })
    res.write("<head><meta charset='UTF-8'></head>")
    res.end()
}).listen(3004)