props default 数组/对象 的默认值应当有一个函数返回

下面是我写的代码
```javascript
export defult {
    props: {
        files: {
            type: Array,
            default: []
        }
    }
}
```
然后就报错了：Invalid default value for prop "files": Props with type Object/Array must use a factory function to return the default value.

需要改成如下
```javascript
export defult {
    props: {
        files: {
            type: Array,
            default: function() {
                return [];
            }
        }
    }
}