//引入mongodb
const {MongoClient}=require('mongodb')

//数据库地址
const url='mongodb://127.0.0.1:27017' 

//定于要操作的数据库
const dbName='egg'

//实例化
const client=new MongoClient(url,{useUnifiedTopology:true})

client.connect(err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('数据连接成功')
    let db=client.db(dbName)
    //操作玩数据库 要关闭连接

    //获取数据
    // db.collection('dataList').find({}).toArray((err,data)=>{
    //     if(err){
    //         console.log(err)
    //         client.close()
    //         return
    //     }
    //     console.log(data)
    //     client.close()
    // })

    //新增数据
    // db.collection('dataList').insertOne({"name":999},(err,result)=>{
    //     if(err){
    //         console.log(err)
    //         client.close()
    //         return
    //     }
    //     console.log(result)
    //     client.close()
    // })

    //修改数据
    // db.collection('dataList').updateOne({"name":666},{$set:{age:12}},(err,result)=>{
    //     if(err){
    //         console.log(err)
    //         client.close()
    //         return
    //     }
    //     console.log(result)
    //     client.close()
    // })
    
    
    //删除多条数据
    db.collection('dataList').deleteMany({"name":999},(err,result)=>{
        if(err){
            console.log(err)
            client.close()
            return
        }
        console.log(result)
        client.close()
    })
})