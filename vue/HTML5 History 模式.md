## 1、安装iis
## 2、安装url 重定向
## 3、配置Web.config
## 4、修改vue代码router
## 5、修改打包文件publicPath

~~~ xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
          <rules>
            <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
                <match url="(.*)" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="./index.html" />
                </rule>
            </rules>
        </rewrite>
        <httpErrors>     
            <remove statusCode="404" subStatusCode="-1" />                
            <remove statusCode="500" subStatusCode="-1" />
            <error statusCode="404" path="/survey/notfound" responseMode="ExecuteURL" />                
            <error statusCode="500" path="/survey/error" responseMode="ExecuteURL" />
        </httpErrors>
        <modules runAllManagedModulesForAllRequests="true" />
    </system.webServer>
</configuration>
~~~

~~~ javascript
const router = new VueRouter({
  mode: 'history',
  base: '/dist/',
  routes
});
~~~

~~~ javascript
module.exports = {
    publicPath: '/dist/'
}
~~~

# 访问的路径：http://localhost:8800/dist/
## <label style="color:red">tip：这里dist可以修改</label>