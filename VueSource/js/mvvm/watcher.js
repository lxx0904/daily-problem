function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    // 包含所有相关的dep的容器对象
    this.depIds = {};
    // 获取初始值
    this.value = this.get();
}

Watcher.prototype = {
    update: function () {
        this.run();
    },

    run: function () {
        var value = this.get();
        var oldVal = this.value;
        if (value !== oldVal) {
            this.value = oldVal;
            // 调用回调函数
            this.cb.call(this.vm, value, oldVal);
        }
    },

    addDep: function (dep) {
        // 判断dep与watcher关系是否已经建立
        if (!this.depIds.hasOwnProperty(dep.id)) {
            // 将watcher添加到dep
            dep.addSub(this);
            // 将dep添加到watcher中
            this.depIds[dep.id] = dep;
        }
    },

    // 得表达式得值，建立dep与watcher的关系
    get: function () {
        Dep.target = this;
        // 获取值并建立关系
        var value = this.getVMVal();
        Dep.target = null;
        return value;
    },

    getVMVal: function () {
        var exp = this.exp.split(".");
        var val = this.vm._data;
        exp.forEach(function (key) {
            val = val[key];
        });
        return val;
    }
}