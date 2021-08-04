//引入mongodb
const {MongoClient}=require('mongodb')

//数据库地址
const url='mongodb://127.0.0.1:27017' 

//定于要操作的数据库
const dbName='itying'

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
    db.collection('admin').find({}).toArray((err,data)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(data)
        client.close()
    })
})