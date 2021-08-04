var http = require('http');
const routes=require('./module/routes.js')
const ejs=require('ejs')
const uitls=require('./utils')

http.createServer( function (request, response) {
    let pathName=new URL(request.url,'http://localhost:3000').pathname
    //创建静态服务
    routes.static(request,response,'./dist')
    
    if(pathName=='/news'){
        var url=new URL(request.url,'http://localhost:3000')
        var query=uitls.changeSearch(url.search)

        console.log(request.method)

        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.end(JSON.stringify(query));
    } else if(pathName=='/agent/workOrder/getMyInviteOrderList'){
        var url=new URL(request.url,'http://localhost:3000')
        var query=uitls.changeSearch(url.search)
        var postData=''
        request.on('data',(chunk)=>{
            postData+=chunk
        })
        request.on('end',()=>{
            console.log(postData)
            response.end(postData)
        })
    } else if(pathName=='/Login'){
        let data='渲染数据'
        let arr=[
            {name:123},
            {name:666},
            {name:555},
            {name:777},
            {name:999},
            {name:333}
        ] 
        ejs.renderFile('./view/login.ejs',{msg:data,arr},(err,data)=>{
            response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
            response.end(data)
        })
    }else if(pathName=='/admin'){
        response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
        response.end('后台');
    }else{
        response.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
        response.end('页面不存在');
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');