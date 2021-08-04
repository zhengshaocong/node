let fs=require('fs')

let readStream=fs.createReadStream('./img.jpg')
let writeStream=fs.createWriteStream('./data/img.jpg')

readStream.pipe(writeStream)