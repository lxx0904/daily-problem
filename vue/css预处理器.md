# 在vue中使用css预处理器

~~~ javascript
    # Sass
    npm install -D sass-load node-sass

    # Less
    npm install -D less-load less

    #Stylus
    npm install -D stylus-load stylus

~~~

~~~ css
    <style lang="scss" scoped>
        $color: #ffffff;
        a {
            color: $color;
        }
    </style>
~~~