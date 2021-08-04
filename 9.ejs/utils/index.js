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