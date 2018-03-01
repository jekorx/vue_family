# vue family basic framework

##vue + vuex + vue-router + axios + webpack

```javascript
// var obj1 = {a: 1, b: 2}
// var obj2 = {...obj1, c: 3} // {a: 1, b: 2, c: 3}
// 插件babel-plugin-transform-object-rest-spread -> transform-object-rest-spread
// 懒加载，异步加载模块，Webpack > 2.4
// const page = () => import(/* webpackChunkName: "page" */ 'page.vue')
// 插件babel-plugin-syntax-dynamic-import -> syntax-dynamic-import
// .babelrc中plugins
"plugins": [
  "transform-object-rest-spread",
  "syntax-dynamic-import"
]
```
// vue-router如果使用history模式，生产模式服务器端配置，可参考https://router.vuejs.org/en/essentials/history-mode.html
Apache
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
nginx
```
location / {
  try_files $uri $uri/ /index.html;
}
```
Native Node.js
```javascript
const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
  fs.readFile('index.htm', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.htm" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
```
