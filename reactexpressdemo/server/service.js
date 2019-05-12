var express = require('express');
const http = require('http');
var app = express();    // app实例
var bodyParser = require('body-parser');  //解析post 的body部分

app.use(bodyParser.json()); //使用body parser用于解析post的body
app.use(bodyParser.urlencoded({extended:true}))  //使用body parser用于解析post的body

app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Access-Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static('public'));

app.post('/login',function(req, res){
    let data = req.body;
    console.log(data);
    let success = {success:true}
    let fail = {success:false}
    if(data.user === '123' && data.password === 'asd'){
        res.send(success);
    }
    else res.send(fail);    
})

app.get('/',function(req,res){
    res.send('saidhasidhoaidshj');
})

app.get('/json',function(req,res){
    let myjson = {
        name : '盒装牛奶',
        price : '3元',
        date : '2018年1月1日'
    }
    res.send(myjson);
})
    
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
