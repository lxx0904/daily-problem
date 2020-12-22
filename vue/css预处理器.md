# 在vue中使用css预处理器

~~~ javascript
    # Sass
    npm install -D node-sass sass-loader

    # Less
    npm install -D less less-loader

    #Stylus
    npm install -D stylus stylus-loader

~~~

~~~ css
    <style lang="scss" scoped>
        $color: #ffffff;
        a {
            color: $color;
        }
    </style>
~~~