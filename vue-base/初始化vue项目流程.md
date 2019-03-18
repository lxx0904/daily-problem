### 使用vue全家桶开发起初注意或者修改步骤图，后期有修改或者补充会更新

1. 通过vue脚手架webpack搭建项目`vue init webpack first-project`
2. 给index.html 添加mete标签，可以引入文件（如样式重置，js封装方法等）
3. 安装css预编译，我推荐scss(sass)格式，安装程序`npm install sass-loader node-sass --save-dev`,就可以在vue文件中`lang="scss"`属性
4. 修改router引入文件路径，改成路由懒加载，减少打包文件大小；格式
```javascript
{
    path: '/',
    name: '名称',
    component: resolve => require(['文件路径'], resolve)
}
})
```
5. 修改config/index.js文件下 build 对象里面 `assetsPublicPath: '/'`修改为`assetsPublicPath: './'`,目的打包出的文件路径正确