const fs=require('fs')



module.exports=function(){
    //判断目标是文件还是目录
    fs.stat('./html',(err,data)=>{
        if(err){
            console.log(err)
            return
        }

        console.log(data.isFile())//是文件
        console.log(data.isDirectory())//是目录
    })
}
