### 清楚浮动
~~~ css
.clearfix {
    zoom: 1;
    &:before {
        content: "\0020";
        display: block;
        height: 0;
        overflow: hidden;
    }
    &:after {
        content: "\0020";
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
    }
}
~~~
### 超出部分省略号
~~~ css
/* 单行 */
.ellipsis {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
/* 多行 */
.ellipsis-3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
~~~
### 三角形 向右
~~~ css
/* 边框 向右 */
.sjx {
    height: 50px;
    width: 50px;
    border-width: 10px 10px 0 0;
    border-color: #000;
    border-style: solid;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
}
/* 实心 向下 */
.sjx {
    width: 0;
    height: 0;
    border-width: 50px 50px 0 50px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
}
~~~