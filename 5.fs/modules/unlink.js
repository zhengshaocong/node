const fs=require('fs')

// fs.unlink 删除文件
/*

path:删除目标路径 
callback: 回调

*/
module.exports=function(path){
    fs.unlink(path,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('删除文件成功')
    })
}