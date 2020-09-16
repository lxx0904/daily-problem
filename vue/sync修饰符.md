> <code>props</code>进行“双向绑定”

~~~ javascript
    // 父组件可以监听那个事件并根据需要更新一个本地的数据 property
    <text-document :title="title" @updata:title="title = $event"></text-document>

    // 子组件需要调用父组件传递的方法
    this.$emit("updata:title", "xxxx") 
~~~

为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：

~~~ javascript
    <text-document v-bind:title.sync="doc.title"></text-document>
~~~