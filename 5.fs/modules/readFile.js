let fs=require('fs')

//fs.readFile 读取文件

module.exports=function(path){
    fs.readFile(path,(error,data)=>{
        if(error){
            console.log(error)
            return
        }
        console.log(data.toString())
    })
}