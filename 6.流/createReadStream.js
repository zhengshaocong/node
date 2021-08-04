const fs=require('fs')

var readStream=fs.createReadStream('./data/text.txt')

var count=0
var str=''

readStream.on('data',(data)=>{
    str+=data
    count+=1
})

readStream.on('end',()=>{
    console.log(str)
    console.log(count)
})

readStream.on('error',(err)=>{
    console.log(err)
})