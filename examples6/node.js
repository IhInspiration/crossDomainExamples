var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('/', proxy({
    target: 'http://jackwang.com:2333',
    changeOrigin: true,

    onProxyRes: function(proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', 'http://q.jackwang.com');
        res.header('Access-Control-Allow-Credentials', 'true');
    },

    cookieDomainRewrite: 'q.jackwang.com'
}));

app.listen(3000);
console.log('Proxy server is listen at port 3000');