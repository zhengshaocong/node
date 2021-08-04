let fs=require('fs')

function isDir(path){
    return new Promise((resolve,reject)=>{
        fs.stat(path,(err,data)=>{
            if(err){
                console.log(err)
                return
            }
    
            if(data.isDirectory()){
                resolve(true)
            }else{
                resolve(false)
            }
        })
    })
}

function getDirectory(path){
    fs.readdir(path,async(err,data)=>{
        if(err){
            console.log(err)
            return
        }
        let arr=[]
        for(var i=0;i<data.length;i++){
            if(await isDir(path+'/'+data[i])){
                arr.push(data[i])
            }
        }
        console.log(arr)
    })
}
getDirectory('www')