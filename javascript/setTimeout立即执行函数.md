~~~ javsscript
for(var i = 0; i < 5; i ++) {
    setTimeout((function(i) {
        console.log(i);
    })(i), i * 1000)
}
~~~
setTimeout() 的回调函数是一个 <font color="red">立即直接函数</font>，运行的接口是：立即打印出0，1，2，3，4

为什么会立即打印出i的值呢？

从字面意思理解，立即函数就是立即执行无需要等待回调，代码加载就立即执行

试着给立即执行函数 return 一个function，setTimeout函数执行的就是这个 <font color="red">function</font>
~~~ javsscript
for(var i = 0; i < 5; i ++) {
    setTimeout((function(i) {
        return function() {
            console.log('回调');
            console.log(i);
        }
    })(i), i * 1000)
}
~~~
运行接口就是，先执行完立即函数，然后再执行funtion的函数，每个i*1000秒就打印出console.log('回调')和console.log(i)

## 总结：setTimeout的第一个参数必须是 <font color="red">需要编译的代码</font> 或者是 <font color="red">一个函数方法</font> ，而如果直接传入一行可执行代码，那么抱歉，这里会立即执行，没有延迟效果

文章来自：[地址](https://www.cnblogs.com/psxiao/p/11408330.html)