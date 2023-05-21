import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { useState } from 'react'
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}
const items = [
  {
    key: 'home',
    style: { marginRight: 'auto' },
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    key: 'counter',
    style: { marginRight: 'auto' },
    label: 'Counter',
    icon: <HomeOutlined />,
  },
  {
    style: { marginLeft: 'auto' },
    label: 'Not Found',
    key: 'notFound',
    icon: <SettingOutlined />,
    // children: [
    //   {
    //     type: 'group',
    //     label: 'Item 1',
    //     children: [
    //       {
    //         label: 'Option 1',
    //         key: 'setting:1',
    //       },
    //       {
    //         label: 'Option 2',
    //         key: 'setting:2',
    //       },
    //     ],
    //   },
    // ],
  },
]
const SideNav = ({ onChangeContent }) => {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      items={items}
      onClick={onChangeContent}
    />
  )
}
export default SideNav
