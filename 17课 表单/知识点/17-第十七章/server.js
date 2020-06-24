var http = require('http');
var urlLib = require('url');

http.createServer(function(req,res){
    
    var GET = {};

    var obj = urlLib.parse(req.url , true)    // true 解析数据成json数据  （解析query）

    var url = obj.pathname;
    GET = obj.query;

    // console.log(obj);
    console.log(url,GET);

    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.write(`
    
        接收到账户：${GET.username}; <br />
        接收到密码：${GET.password}; <br />
        喜欢的水果：${GET.shuiguo}; <br />
        喜欢的明星：${GET.mingxing}; <br />
        部落：${GET.buluo}; <br />
        评论：${GET.text}; <br />

    
    `);
    res.end();
}).listen(8880);



