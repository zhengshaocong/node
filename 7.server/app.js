var http = require('http');
var fs=require('fs')
var path=require('path')
var url=require('url')
const querystring = require('querystring') // 引用querystring
const common=require('./module/common.js')

http.createServer( function (request, response) {
  //获取地址
  let pathName=request.url
  pathName==='/'?pathName='/index.html':''

  let extname=path.extname(pathName)
   if(pathName!=='/favicon.ico'){
    fs.readFile('./dist'+pathName,async(err,data)=>{
        
        let mime=await common.getMime(extname)
        if(err){
            response.writeHead(404, {'Content-Type': 'text/html;charse=UTF-8'});
            response.write("<head><meta charset='UTF-8'></head>")
            response.end('这个页面不存在');
            return
        }
        response.writeHead(200, {'Content-Type': mime+';charse=utf-8'});
        if(mime==='text/html'){
            response.write("<head><meta charset='UTF-8'></head>")   
        }
        response.end(data);
    })
   }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');