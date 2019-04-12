## form 表单系列
> form.render(); //更新全部

> form.render('select/checkbox/radio'); //刷新select/checkbox/radio渲染

> filter，为 class="layui-form" 所在元素的 lay-filter="" 的值。你可以借助该参数，对表单完成局部更新
~~~ javascript
// 【HTML】
<div class="layui-form" lay-filter="test1"> … </div>
<div class="layui-form" lay-filter="test2"> … </div>
// 【JavaScript】
form.render(null, 'test1'); //更新 lay-filter="test1" 所在容器内的全部表单状态
form.render('select', 'test2'); //更新 lay-filter="test2" 所在容器内的全部 select 状态
~~~
##  element 页面元素系列
> element.init(); //更新全部 2.1.6 可用 element.render() 方法替代

> element.render('tab/nav/breadcrumb/progress/collapse'); //重新对tab/nav/breadcrumb/progress/collapse进行渲染。注：layui 2.1.6 版本新增

> filter，为元素的 lay-filter="" 的值。你可以借助该参数，完成指定元素的局部更新。
~~~ javascript
// 【HTML】
<div class="layui-nav" lay-filter="test1"> … </div>
<div class="layui-nav" lay-filter="test2"> … </div>
// 【JavaScript】
//比如当你对导航动态插入了二级菜单，这时你需要重新去对它进行渲染
element.render('nav', 'test1'); //对 lay-filter="test1" 所在导航重新渲染。注：layui 2.1.6 版本新增
//……
~~~