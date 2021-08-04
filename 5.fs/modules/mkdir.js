const fs=require('fs')

//fs.mkdir 创建目录

/*
path 路径
mode 权限
callback 回调
*/

module.exports=function(path){
    fs.mkdir(path,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('成功')
    })
}