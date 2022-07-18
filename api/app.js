var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('/', proxy({
    // 代理跨域目标接口
    target: 'http://api.qemao.com/api/yiyan',
    changeOrigin: true,

    // 修改响应头信息，实现跨域并允许带cookie
    onProxyRes: function (proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', 'http://api.qemao.com/api/yiyan');
        res.header('Access-Control-Allow-Credentials', 'true');
    },

    // 修改响应信息中的cookie域名
    cookieDomainRewrite: '127.0.0.1'  // 可以为false，表示不修改
}));

app.listen(5501);
console.log('Proxy server is listen at port 3000...');

