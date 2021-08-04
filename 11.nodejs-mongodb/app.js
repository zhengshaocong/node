var http = require('http');
var {MongoClient}=require("mongodb")
var app=require('./utils/express')
var url='mongodb://127.0.0.1:27017'
var client=new MongoClient(url)
var utils=require("./utils")
http.createServer(app).listen(8081);
app.get('news',(req,res)=>{
    client.connect(err=>{
        if(err){
            console.log(err)
            return 
        }
        let db=client.db('egg')
        db.collection('dataList').find({}).toArray((err,data)=>{
            if(err){
                console.log(err)
                return 
            }
            client.close()
            res.send(utils.makeResponse(data,200))
        })
    })
    
})
console.log('Server running at http://127.0.0.1:8081/');