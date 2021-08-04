const fs=require('fs')
var path=require('path');
var defpath=path.join(__dirname,'../')
let mine={}
getFileMime().then(res=>{
    mine=res
})
// console.log(getFileMime2())
exports.getMime=async function(extname){
    if(JSON.stringify(mine)==='{}'){
        mine=await getFileMime()
        return mine[extname]
    }else{
        return mine[extname]
    }
}
function getFileMime(){
    return new Promise((resolve,reject)=>{
        fs.readFile(defpath+'/data/mine.json',(err,data)=>{
            if(err){
                reject(err)
                return
            }
            resolve(JSON.parse(data.toString()))
        })
    })
}

function getFileMime2(){
    var data= fs.readFileSync(defpath+'/data/mine.json')
    let mine=JSON.parse(data.toString())
    return mine
}


exports.getFileMime=getFileMime