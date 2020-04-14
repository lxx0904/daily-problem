function Compile(el, vm) {
    this.$vm = vm;
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);

    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el);
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    node2Fragment: function (el) {
        var fragment = document.createDocumentFragment(),
            child;

        // 将原生节点拷贝到fragment
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }

        return fragment;
    },

    isElementNode: function (node) {
        return node.nodeType == 1;
    },

    isTextNode: function (node) {
        return node.nodeType == 3;
    },

    init: function () {
        this.compileElement(this.$fragment);
    },

    compileElement(el) {
        var childNodes = el.childNodes,
            me = this;

        [].slice.call(childNodes).forEach(function (node) {
            var text = node.textContent;
            var reg = /\{\{(.*)\}\}/;

            if (me.isElementNode(node)) {
                me.compile(node);
            } else if (me.isTextNode(node) && reg.test(text)) {
                me.compileText(node, RegExp.$1);
            }

            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },

    compileText(node, exp) {
        compileUtil.text(node, this.$vm, exp);
    },

    compile(node) {
        var nodeAttrs = node.attributes,
            me = this;

        [].slice.call(nodeAttrs).forEach(function (attr) {
            var attrName = attr.name;
            if (me.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                // 事件指令
                if (me.isEventDirective(dir)) {
                    compileUtil.eventHandler(node, me.$vm, exp, dir);
                } else {
                    // 普通指令
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }
                node.removeAttribute(attrName);
            }
        });
    },

    isDirective(attr) {
        return attr.indexOf("v-") == 0;
    },

    isEventDirective(dir) {
        return dir.indexOf("on") == 0;
    }
};

var compileUtil = {
    // 解析v-text/{{}}
    text: function (node, vm, exp) {
        this.bind(node, vm, exp, 'text');
    },

    html: function (node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },

    class: function (node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },

    model: function (node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener("input", function (e) {
            var newVal = e.target.value;
            if (val === newVal) {
                return;
            }

            me._setVMVal(vm, exp, newVal);
            val = newVal;
        })
    },

    bind: function (node, vm, exp, dir) {
        var updaterFn = updater[dir + 'Updater'];
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        // 为表达式创建一个对应的watcher，实现节点的更新显示
        new Watcher(vm, exp, function (value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    eventHandler: function (node, vm, exp, dir) {
        var eventType = dir.split(":")[1],
            fn = vm.$option.methods && vm.$option.methods[exp];

        if (eventType && fn) {
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },

    _getVMVal: function (vm, exp) {
        var val = vm._data;
        exp = exp.split(".");
        exp.forEach(function (k) {
            val = val[k];
        });
        return val;
    },

    _setVMVal: function (vm, exp, value) {
        var val = vm._data;
        exp = exp.split(".");
        exp.forEach(function (k, i) {
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};

var updater = {
    textUpdater: function (node, value) {
        node.textContent = typeof value == 'undefined' ? "" : value;
    },

    htmlUpdater: function (node, value) {
        node.innerHTML = typeof value == 'undefined' ? "" : value;
    },

    classUpdater: function (node, value) {
        var className = node.className;
        node.className = className + (className ? " " : "") + value;
    },

    modelUpdater: function (node, value) {
        node.value = typeof value == 'undefined' ? "" : value;
    }
};