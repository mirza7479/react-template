import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { useState } from 'react'
import Home from './home'
const items = [
  {
    key: 'home',
    style: { marginRight: 'auto' },
    label: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    style: { marginLeft: 'auto' },
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
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
    ],
  },
]
const TopNav = ({ onChangeContent }) => {
  return (
    <Menu
      theme="dark"
      onClick={onChangeContent}
      selectedKeys={false}
      mode="horizontal"
      items={items}
    />
  )
}
export default TopNav
