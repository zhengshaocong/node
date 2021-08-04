const fs=require('fs')

//fs.writeFile 创建写入文件
/*
filename 路径 文件名称
data 写入文件的内容
options （Object） 设置对象
  encoding （string） 可选 默认 'utf-8' 
  mode (number) 文件写权限 默认 438
  flag （string） 默认参数'w'
callback 回调
*/

module.exports=function(path,contex){
    fs.writeFile(path,contex,(err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('写入成功')
    })
}