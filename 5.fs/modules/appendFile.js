const fs=require('fs')

//fs.appendFile 追加内容或者创建文件

module.exports=function(path,data){
    fs.appendFile(path,data,(error)=>{
        if(error){
            console.log(error)
            return
        }
        console.log('appendFile 成功')
    })
}