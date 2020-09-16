深度左右选择器：使用<code>>>></code>操作符可以使scoped样式中的一个选择器能够作用的“更深”，例如影响子组件
~~~ css
    <style scoped>
        #app >>> a {
            color: red;
        } 
    </style>
~~~
如果使用Sass之类的预处理器无法正确解析<code>>>></code>，这种情况下可以使用<code>/deep/</code>或<code>::v-deep</code>操作符取而代之
~~~ css
    <style scoped lang="scss">
        #app {
            /deep/ a {
                color: red;
            }
            ::v-deep p {
                color: green;
            }
        }
    </style>
~~~