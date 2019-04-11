1 在config/prod.env.js文件中通过后缀名区分不同的环境
```javascript
'use strict'
module.exports = {
  NODE_ENV: '"production"',
    // dev开发环境
  API_PATH_DEV: '"//localhost.8080"', 
    // test测试环境
  API_PATH_TEST: '"//localhost.8081"', 
    // 生产上线环境
  API_PATH_PROD: '"//xxxxx"', 
}
```
因为prod.env.js定义的常量可以在全局引用

2 可以自己自定义一个服务文件(service.js),在main.js引入,这样每次运行程序都会首先运行这个配置文件
```javascript
import axios from 'axios'
const hostname = location.hostname;
if(hostname === 'localhost') {
    axios.defaults.baseURL = production.env.API_PATH_DEV;
} else if(hostname === 'xxxx.test') {
    axios.defaults.baseURL = production.env.API_PATH_TEST;
} else if(hostname === 'xxxx.prod') {
    axios.defaults.baseURL = production.env.API_PATH_PROD;
}
```

3 每次运行 npm run dev,不同的环境根据当前域名选择不同的服务地址,这样在开发和打包出,就不用修改了

