import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import Axios from 'axios'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    login = () => {
        const {
            username,
            password
        } = this.state
        Axios("login.json", {
            username,
            password
        }).then((res) => {
            const { data } = res;
            if(data.status === 0) {
                this.props.history.push("/home")
            }
        })
    }
    render() {
        return (
            <Form className="form-login">
                <Form.Item>
                    <Input placeholder="请输入用户名" maxLength={6} onChange={this.usernameChange}></Input>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="请输入密码" maxLength={6} type="password" onChange={this.passwordChange}></Input>
                </Form.Item>
                <label>{this.state.username} - {this.state.password}</label>
                <Form.Item>
                    <Button type="primary" onClick={this.login}>登录</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Login