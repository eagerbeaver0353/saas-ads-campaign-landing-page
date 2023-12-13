import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
const items = [
    {
        label: 'Product',
        key: 'product',
        // icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
        ]
    },
    {
        label: 'Company',
        key: 'company',
        // icon: <SettingOutlined />,
        children: [{
            type: 'group',
            label: 'Item 2',
            children: [
                {
                    label: 'Option 3',
                    key: 'setting:3',
                },
                {
                    label: 'Option 4',
                    key: 'setting:4',
                },
            ],
        },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Blog
            </a>
        ),
        key: 'blog',
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Pricing
            </a>
        ),
        key: 'pricing',
    },
];
const App = () => {
    const [current, setCurrent] = useState();
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu mode="horizontal" items={items} />;
};
export default App;