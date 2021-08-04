const fs=require('fs')

//fs.readdir 读取目录

module.exports=function(path){
    fs.readdir(path,(error,data)=>{
        if(error){
            console.log(error)
            return
        }
        console.log(data)
    })
}