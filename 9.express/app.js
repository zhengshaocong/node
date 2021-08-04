var http = require('http');
const ejs=require('ejs')
const express=require('./utils/express')
const uitls=require('./utils')

http.createServer(express).listen(8081);


express.static('./dist')

express.get('Login',(request,response)=>{
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
})


express.get('news',(request,response)=>{
    var url=new URL(request.url,'http://localhost:3000')
    var query=uitls.changeSearch(url.search)
    uitls.makeResponse(query,200)
    response.send(uitls.makeResponse(query,200))
})



express.get('admin',(request,response)=>{
    response.send('后台')
})

express.post('agent/workOrder/getMyInviteOrderList',(request,response)=>{
    response.send(uitls.makeResponse(request.body,200))
})


console.log('Server running at http://127.0.0.1:8081/');