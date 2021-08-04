var http = require('http');
var url=require('url')
http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-type':"text/html;charse=UTF-8"
    })
    res.write("<head><meta charset='UTF-8'></head>")
    console.log(req.url)
    if(req.url!=='/favicon.ico'){
        var info=url.parse(req.url,true).query
        console.log(info)
    }
    res.end()
}).listen(3001)