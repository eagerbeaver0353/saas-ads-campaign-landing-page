import React, { ReactDOM } from "react";
import { Menu, Icon } from 'antd';
import RcQueueAnim from 'rc-queue-anim';

const { SubMenu } = Menu;
import "./navigation.less";

class App extends React.Component {
    render() {
        const { className, isMobile, navToShadow } = this.props;
        return (
            <Menu onClick={this.handleClick} mode="horizontal" className="text-black space-x-2">
                {/* <RcQueueAnim
                    type={isMobile ? 'bottom' : 'right'}
                    className={`${className}-text-wrapper`}
                    delay={300}
                > */}
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper bg-transparent">
                            {/* <Icon type="setting" /> */}
                            Product
                        </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper  bg-transparent">
                            {/* <Icon type="setting" /> */}
                            Company
                        </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="blog">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer" className="text-black  bg-transparent">
                        Blog
                    </a>
                </Menu.Item>
                <Menu.Item key="pricing">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer" className="text-black bg-transparent">
                        Pricing
                    </a>
                </Menu.Item>
                {/* </RcQueueAnim> */}
            </Menu>
        );
    }
}

export default App
