const express = require('express');
const bodyParser = require('body-parser');
const static = require('express-static');
const multer = require('multer');
const fs = require('fs');     //文件重命名
const pathLib = require('path'); //解析文件路径

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({}));

server.use(express.static('view'));

console.log('张宏铭用来验证');

//登陆验证
server.use('/', require('./router/identify')());