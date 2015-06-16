// 入口文件
var express = require('express');
var app = express();
// app.use(express.static(__dirname + '/public'));

// 监听路由
app.get('/', function (req, res) {
	res.set('Content-Type', 'text/html');
	res.send('home');
});

app.get('/backend', function (req, res) {
	res.set('Content-Type', 'text/html');
	res.send('backend');
});

// js 问题
app.get('/js', function(req, res) {
	res.set('Content-Type', 'application/javascript');

});

// js 问题
app.get('/css', function(req, res) {
	res.set('Content-Type', 'text/css');
	
});


// 设置监听端口
app.listen(8000);