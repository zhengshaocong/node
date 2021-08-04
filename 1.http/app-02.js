var url=require('url')
var api="http://www.baidu.com?name=zsc&age=20"
console.log(url.parse(api,true).query)