### 这样直接在引入本地图片是没有问题的
~~~javascript
<div id="app">
    <img src="./assets/logo.png">
</div>
~~~
### 把本地图片地址提取出来，放在data里面，就引用不到了，图片显示不了
~~~javascript
<div id="app">
    <img :src="imgSrc">
</div>

<script>
export default {
    data() {
        return {
            imgSrc: "./assets/logo.png"
        }
    }
}
</script>
~~~
原因：放在模版里是会被 webpack 打包出来 所以可以，而在 js 里写图片路径其实只是字符串 webpack 不会处理
### 解决方法

* `imgSrc: "./assets/logo.png"` 改成  `imgSrc: require("./assets/logo.png")`
* 通过import导入 `import imgSrc from  "./assets/logo.png"` 在data里赋值 `imgSrc: imgSrc`
* 放在最外层的 static 文件夹 `imgSrc: "static/logo.png"`

但是第一种和第二种方法不美观，太麻烦，第三种方法不会被url加载器处理，根据项目需求自己处理

### css url(本地图片地址)是正常的