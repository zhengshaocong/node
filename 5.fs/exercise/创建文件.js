const fs=require('fs')
function mkdir(path){
    fs.mkdir(path,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('创建成功')
    })
}

module.exports=function(path){
    fs.stat(path,(error,data)=>{
        if(error){
            mkdir(path)
            return
        }
        if(!data.isDirectory()){
            if(data.isFile()){
                fs.unlink(path,(error)=>{
                    if(error){
                        console.log('删除失败，请检查路径')
                        return
                    }
                    mkdir(path)
                })
            }else{
                mkdir(path)
            }
        }
    })
}