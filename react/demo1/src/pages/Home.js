import React, { Component } from 'react'
import { Table } from 'antd'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [],
            index: 0
        }
    }
    componentDidMount() {
        this._getData()
    }
    _getData() {
        Axios.get("home.json").then(res => {
            const { data } = res
            if (data.status === 0) {
                this.setState({
                    dataSource: data.data
                })
            }
        })
    }
    indexChange = (index) => {
        this.setState({
            index
        })
    }
    render() {
        const columns = [
            {
                title: "地区",
                dataIndex: "area",
                key: 'area'
            }, {
                title: "Java",
                dataIndex: "java",
                key: 'java'
            }, {
                title: "PHP",
                dataIndex: "php",
                key: 'php'
            }, {
                title: "Node",
                dataIndex: "node",
                key: 'node'
            }, {
                title: "JS",
                dataIndex: "js",
                key: 'js'
            }, {
                title: "Python",
                dataIndex: "python",
                key: 'python'
            }
        ];
        return (
            <div className="home">
                <h1>语言大数据报告</h1>
                <div className="wrap">
                    <div className="nav">
                        <a className={this.state.index === 0 ? 'active' : ''} onClick={this.indexChange.bind(this, 0)}>语音动态</a>
                        <a className={this.state.index === 1 ? 'active' : ''} onClick={this.indexChange.bind(this, 1)}>语音地图</a>
                        <a className={this.state.index === 2 ? 'active' : ''} onClick={this.indexChange.bind(this, 2)}>语音热搜</a>
                        <a className={this.state.index === 3 ? 'active' : ''} onClick={this.indexChange.bind(this, 3)}>语音播放</a>
                    </div>
                    <p>数据纯属虚构</p>
                    <Table pagination={false} bordered dataSource={this.state.dataSource} columns={columns} />
                    <Link to="/" className="link-nav">回首页</Link>
                </div>
            </div>
        )
    }
}

export default Home