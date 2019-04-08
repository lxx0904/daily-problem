### 使用vue全家桶开发，需要注意或者修改步骤图，后期有修改或者补充会更新
1. 通过vue脚手架webpack搭建项目`vue init webpack first-project`
2. 给index.html 添加mete标签，可以引入文件（如样式重置，js封装方法等）
3. 安装css预编译，我推荐scss(sass)格式，安装程序`npm install sass-loader node-sass --save-dev`,就可以在vue文件中`lang="scss"`属性
4. 修改config/index.js文件下 build 对象里面 `assetsPublicPath: '/'`修改为`assetsPublicPath: './'`,目的打包出的文件路径正确
5. 修改config/index.js文件下 build 对象里面 `productionSourceMap` 设置为`false`加快打包的速度
6. 安装babel-polyfill 引入`import "babel-polyfill"` 兼任ie浏览器
7. 如何减小打包文件的大小
    * 修改router引入文件路径，改成路由懒加载，减少打包文件大小；格式
    ```javascript
    {
        path: '/',
        name: '名称',
        component: resolve => require(['文件路径'], resolve)
    }
    })
    ```
    * 引入文件方式 把import或者require方式改成在index.html文件中script方式引入，文件路径可以cdn或者其他的网络资源，并要在build/webpack.base.conf文件下修改，插入代码，格式如下
    ```javascript
    externals: {
        'vue': 'Vue',
        'mint-ui': 'MINT',
        'vue-photo-preview': 'vuePhotoPreview',
        'axios': 'axios',
        'vue-router': 'VueRouter'
    }
    ```
    * 可以提取类似的css代码，进行公共出来，减少复用
8. vue设置全局方法`Vue.prototype.xxxx`
9. 运行时候（区分测试环境。开发环境。生产环境），可以通过当前运行的域名进行配置