const fs=require('fs')

// fs.rmdir 删除目录
/*
path: 删除路径
options: 设置,
  {
      maxRetries:number 重试次数
      retryDelay:number 重试延迟
   }
callback: 回调
*/

module.exports=function(path){
    fs.rmdir(path,(error)=>{
        if(error){
            console.log(error)
            return
        }
        console.log('删除成功')
    })
}