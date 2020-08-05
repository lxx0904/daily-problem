import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>欢迎来到德莱文王国</h1>
                <Link to="/login">去登录</Link>
                <br />
                <Link to="/home">去首页</Link>
            </div>
        )
    }
}

export default App