# echarts使用过程中常用option配置需求
## 布局设置，显示更多，减少空间浪费
~~~ javascript
xAxis: { //值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比。
    left: 10, //grid 组件离容器左侧的距离。
    top: 60, //grid 组件离容器上侧的距离。
    right: 10, //grid 组件离容器右侧的距离。
    bottom: 60 //grid 组件离容器下侧的距离。
}
~~~
## x轴文字显示不全的问题
~~~ javascript
grid: {
    axisLabel: {
        interval: 0, //设置成 0 强制显示所有标签
        rotate: 0 //设置旋转的角度，默认为0
    }
}
~~~
## 柱状图太粗
~~~ javascript
series: {
    barWidth: {
        barWidth: 20, //可以使用绝对数值（如 10）或百分比（如 '20%'，表示 band width 的百分之多少）。默认自适应。
    }
}
~~~
## 柱状图颜色修改
~~~ javascript
series: {
    itemStyle: {
        color: '#ffffff' //设置单个颜色
        color: function(params) { //设置多种颜色
            var colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ]; 
            return colorList[params.dataIndex]
        }
    }
}
~~~