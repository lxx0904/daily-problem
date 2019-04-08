因为forEach()无法通过正常流程终止，所以可以通过抛出异常的方式实现终止
```javascript
try {
    arr.forEach((i) => {
        if(i > 10) {
            throw new Error("抛出异常，终止循环" + i);
        }
    });
} catch (err) {
    console.log(err) //抛出异常
}
```

## 拓展其他循环
* for循环
    > 跳出本轮循环：continue
    
    > 终止本次循环：break 
* jquery $.each
    > 跳出本轮循环：return true;
    
    > 终止本次循环：return false;或者try catch方式



