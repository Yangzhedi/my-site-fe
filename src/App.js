import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import logo from '@/assets/logo.svg';
import '@/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current: 'home',
    }
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div className="App">
        <Menu onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="home" /> 主页
          </Menu.Item>
          <Menu.Item key="blog">
            <Icon type="book" /> 博客
          </Menu.Item>
          <Menu.Item key="stock">
            <Icon type="file-excel" /> 数据
          </Menu.Item>
          <Menu.Item key="about">
            <Icon type="solution" /> 关于
          </Menu.Item>
          <Menu.Item key="code-guide">
            <Icon type="code-o" /> 规范
          </Menu.Item>
          <Menu.Item key="gif-maker" disabled>
            <Icon type="picture" /> 生成表情包
          </Menu.Item>
        </Menu>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
