/*
相当于Vue的构造函数
*/
function MVVM(option) {
    // 将配置对象保存到vm
    this.$option = option;
    // 将data对象保存到vm和变量data中
    var data = this._data = this.$option.data;
    // 保存vm
    var me = this;

    // 变量data中所有的属性
    Object.keys(data).forEach(key => { // key是data某个属性名
        // 对指定的属性实现代理
        me._proxy(key);
    });

    // 对data中所有层次的属性通过数据劫持实现数据绑定
    observe(data, this);

    new Compile(option.el || document.body, this);

}

MVVM.prototype = {
    /*
    实现指定属性代理的方法
    */
    _proxy: function (key) {
        var me = this;
        Object.defineProperty(me, key, {
            configurable: false, // 不能重新定义
            enumerable: true, // 可以枚举遍历
            // 当通过vm.xxx读取属性值时调用，从data中获取对应的属性值返回   代理读操作
            get: function () {
                return me._data[key];
            },
            // 当通过vm.xxx = value时，value被保存到data中对应的属性上     代理写操作
            set: function (newVal) {
                me._data[key] = newVal;
            }
        })
    }
}