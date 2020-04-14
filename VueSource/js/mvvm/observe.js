function Observer(data) {
    this.data = data;
    this.walk(data);
}

Observer.prototype = {
    walk: function (data) {
        var me = this;
        Object.keys(data).forEach(function (key) {
            // 对指定的属性实现响应式的数据绑定
            me.defineReactive(data, key, data[key]);
        })
    },

    defineReactive: function (data, key, val) {
        // 创建属性对应的dep对象
        var dep = new Dep();
        // 通过间接的递归调用实现对data中所有层次属性的数据劫持
        var childObj = observe(val);
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
            // 返回值，建立dep / watcher之间的关系
            get: function () {
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            // 监视key属性的变换，更新界面
            set: function (newVal) {
                if (newVal === val) {
                    return
                }
                val = newVal;
                // 新的值是object的话，进行监听
                childObj = observe(newVal);
                // 通知所有相关的订阅者
                dep.notify();
            }
        });
    }
}

function observe(data, vm) {
    // 被观察的必须是一个对象
    if (!data || typeof data !== "object") {
        return;
    }
    return new Observer(data);
}

var uid = 0;

function Dep() {
    this.uid = uid++;
    this.subs = [];
}

Dep.prototype = {
    // 添加watcher添加到dep中
    addSub: function (sub) {
        this.subs.push(sub);
    },

    // 去建立dep约watcher之间的关系
    depend: function () {
        Dep.target.addDep(this);
    },

    notify: function () {
        // 遍历watcher
        this.subs.forEach(function (sub) {
            sub.update();
        })
    }
}

Dep.target = null;