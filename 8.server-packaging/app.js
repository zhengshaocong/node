var http = require('http');
const routes=require('./module/routes.js')

http.createServer( function (request, response) {
    let pathName=request.url
    //创建静态服务
    routes.static(request,response,'./dist')

    if(pathName=='/Login'){
        response.writeHead(200, {'Content-Type': 'text/html;charse=UTF-8'});
        response.write("<head><meta charset='UTF-8'></head>")
        response.end('登录');
    }else if(pathName=='/admin'){
        response.writeHead(200, {'Content-Type': 'text/html;charse=UTF-8'});
        response.write("<head><meta charset='UTF-8'></head>")
        response.end('后台');
    }else{
        response.writeHead(404, {'Content-Type': 'text/html;charse=UTF-8'});
        // response.write("<head><meta charset='UTF-8'></head>")
        response.end('页面不存在');
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');