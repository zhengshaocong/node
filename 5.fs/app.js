const fs=require('fs')

// fs.stat 判断目标是文件还是目录
// const stat=require('./modules/stat')
// stat()



// fs.mkdir 创建目录
// const mkdir=require('./modules/mkdir')
// mkdir('./html2')



//fs.writeFile 创建写入文件 (若存在则覆盖)
const writeFile=require('./modules/writeFile')
writeFile('./html2/aaaa.html','555')



//fs.appendFile 追加创建文件 (若存在则将内容追加在文件之后 若不存在则创建)
// const appendFile=require('./modules/appendFile')
// appendFile('./css/index.css','body{font-size:18px}')


//fs.readFile  读取文件
// const readFile=require('./modules/readFile')
// readFile('./css/index.css')



//fs.readdir  读取目录
// const readdir=require('./modules/readdir')
// readdir('./css')



// fs.rename 重命名文件 或者 移动
// const rename=require('./modules/rename')
// rename('./html/index1.css','./css/index1.css')

// // fs.rmdir 删除目录
// const rmdir=require('./modules/rmdir')
// rmdir('./html2')


// // fs.unlink 删除文件

// const unlink =require('./modules/unlink')
// unlink('./html2/aaaa.html')

