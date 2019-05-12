var express = require('express');
const http = require('http');
var app = express();    // app实例
var bodyParser = require('body-parser');  //解析post 的body部分

var mysql = require('mysql');


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

var connection = mysql.connection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'root',
    database:'mydata'
});

connection.connect();

var selectData = "SELECT *FROM mydata";
var str = '';

connection.query(selectData, function(err,result){
    if(err){
        console.log('select',err.message);
    }
    else{
        str = JSON.stringify(result);
        console.log(result);
    }
})

app.use(express.static('public'));

app.get('/home',function(req,res){
    res.send(str);
})

// 根据ID查询
app.get('/article$\d', function(req,res){
    res.send(str);
})


connection.end();

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
