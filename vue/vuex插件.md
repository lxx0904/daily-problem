注册插件
~~~ javascript
    const store = new Vuex.store({
        // 
        plugins: [myPlugin]
    });
~~~

范例：实现登录状态持久化
~~~ javascript
    export defalut store => {
        if(localStorage) {
            const user = JSON.parse(localStorage.getItem("user"));
            if(user) {
                store.commit("login", user);
            }
        }

        // 如果用户相关状态发生变化。自动存储localStorage
        store.subscribe((mutation, state) => {
            if(mutation.type === "login") {
                const user = JSON.stringify(state.user);
                localStorage.setTtem("user", user)
            } else if(mutation.type === "logout") {
                localStorage.removeItem("user")
            }
        })
    }
~~~