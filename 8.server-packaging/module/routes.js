const fs=require('fs')
var path=require('path');
var defpath=path.join(__dirname,'../')

let mine=getFileMime()

function getMime(extname){
    if(JSON.stringify(mine)==='{}'){
        mine=getFileMime()
        return mine[extname]
    }else{
        return mine[extname]
    }
}

function getFileMime(){
    var data= fs.readFileSync(defpath+'/data/mine.json')
    let mine=JSON.parse(data.toString())
    return mine
}

exports.static=function(request,response,staticPath){
    let pathName=request.url
    pathName==='/'?pathName='/index.html':''
    let extname=path.extname(pathName)
     if(pathName!=='/favicon.ico'){
         try{
            let data=fs.readFileSync(staticPath+pathName)
            if(data){
                let mime=getMime(extname)
                response.writeHead(200, {'Content-Type': mime+';charse=utf-8'});
                if(mime==='text/html'){
                    response.write("<head><meta charset='UTF-8'></head>")   
                }
                response.end(data);
            }
         }catch(err){
         }
     }
}

exports.getFileMime=getFileMime
exports.getMime=getMime