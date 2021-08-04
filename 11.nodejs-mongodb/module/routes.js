const fs=require('fs');
var path=require('path');

var defpath=path.join(__dirname,'../')
const uitls=require(defpath+'/utils')

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


let app={
    static(request,response,staticPath){
        let pathName=new URL(request.url,'http://localhost:3000').pathname
        pathName==='/'?pathName='/index.html':''
        let extname=path.extname(pathName)
         if(pathName!=='/favicon.ico'){
             try{
                let data=fs.readFileSync(staticPath+pathName)
                if(data){
                    let mime=getMime(extname)
                    response.writeHead(200, {'Content-Type': mime+';charset=utf-8'});
                    response.end(data);
                }
             }catch(err){
             }
         }
    },
    ['/agent/workOrder/getMyInviteOrderList'](request,response){
        var postData=''
        request.on('data',(chunk)=>{
            postData+=chunk
        })
        request.on('end',()=>{
            console.log(postData)
            response.end(uitls.makeResponse(postData,200))
        })
    },
    error(req,res){
        res.end('error')
    }
}

module.exports=app