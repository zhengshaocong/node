var http = require('http');
var url=require('url')
const tool=require('./moudle/tools.js')
console.log(tool)
http.createServer(function(req,res){
    res.writeHead(200,{
        'Content-type':"text/html;charse=UTF-8"
    })
    res.write("<head><meta charset='UTF-8'></head>")
    let api=tool.formApi('api/aaaa?asdassd=1111&ssdhs=4444')
    res.write(api)
    console.log(req.url)
    if(req.url!=='/favicon.ico'){
        var info=url.parse(req.url,true).query
        console.log(info)
    }
    res.end()
}).listen(3001)