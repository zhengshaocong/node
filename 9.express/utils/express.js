const path=require('path')
const root=path.join(__dirname,'../')
const fs=require('fs')
const uitls=require(root+'/utils')

function changeRes(response){ // 固定返回地址的模板
    response.send=(data)=>{
        response.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
        response.end(data);
    }
}


let allMine=getFileMime()///文件后缀与返回格式对照表

function getFileMime(){//获取文件后缀与返回格式对照表
    var data= fs.readFileSync(root+'/data/mine.json')
    let mine=JSON.parse(data.toString())
    return mine
}


function  initStatic(request,response,staticPath){//获取静态服务信息
    let pathName=new URL(request.url,'http://localhost:3000').pathname
    pathName==='/'?pathName='/index.html':''
    let extname=path.extname(pathName)
     if(pathName!=='/favicon.ico'){
         try{
            let data=fs.readFileSync(staticPath+pathName)
            if(data){
                let mime=allMine[extname]
                response.writeHead(200, {'Content-Type': mime+';charset=utf-8'});
                response.end(data);
            }
         }catch(err){
             console.log(err)
         }
     }
}


let server=()=>{  //封装
    let root=path.join(__dirname,'../')
    const routes=require(root+'/module/routes.js')


    let G={
        _get:{},
        _post:{},
        staticPath:'static'
    }


    let app=function(request,response){
        changeRes(response)

        let pathName=new URL(request.url,'http://localhost:3000').pathname
        //创建静态服务
        initStatic(request,response,G.staticPath)

        let execute=pathName.slice(1)
        if(request.method.toLocaleUpperCase()==='GET'&&G._get[execute]){
            G._get[execute](request, response)
        }else if(request.method.toLocaleUpperCase()==='POST'&&G._post[execute]){
            let postData=""
            request.on('data',(chunk)=>{
                postData+=chunk
            })
            request.on('end',()=>{
                request.body=postData
                G._post[execute](request, response)
            })
        }else{
            response.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
            response.end('页面不存在');
        }
    }
    
    app.get=function(str,cb){
        G._get[str]=cb
    }
    
    app.post=function(str,cb){
        G._post[str]=cb
    }

    app.static=function(staticPath){
        G.staticPath=staticPath
    }

    return app
}


module.exports=server()