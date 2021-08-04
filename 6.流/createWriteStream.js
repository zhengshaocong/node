const fs=require('fs')
var str=""

for(var i=0;i<500;i++){
    str+='数据库数据+++'+i+'\n'
}

var writeStream=fs.createWriteStream('./data/text2.txt')
writeStream.write(str)

writeStream.end()

writeStream.on('finish',()=>{
    console.log('完成')
})