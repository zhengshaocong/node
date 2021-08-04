const fs =require('fs')

// 重命名或者移动文件 fs.rename
/*
oldPath: 原始路径
newPath: 新路径
callback: 回调
*/
module.exports=function(oldPath,newPath){
    fs.rename(oldPath,newPath,(error)=>{
        if(error){
            console.log(error)
            return
        }
        console.log('重命名成功')
    })
}