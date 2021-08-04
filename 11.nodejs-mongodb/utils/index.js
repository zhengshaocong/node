/**
 * @description: 将链接的参数转换为对象
 * @param {*} search
 * @return {*}
 */
exports.changeSearch=function(search){
    let data=search.slice(1)
    let arr=data.split('&')
    arr=arr.filter(item=>item)
    let obj={}
    for(let i=0;i<arr.length;i++){
        let isData=arr[i].split('=')
        obj[isData[0]]=isData[1]
    }
    return obj
}
/**
 * @description: 返回内容通用格式
 * @param {*}
 * @return {*}
 */
exports.makeResponse=function(data,code,message){
     
    return JSON.stringify({
        "code": code,
        "message": message,
        "data": data
    })
}