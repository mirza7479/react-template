import { Layout, theme } from 'antd'
import React, { useState } from 'react'
import NotFound from './notFound'
import SideNav from './sideNav'
import TopNav from './topNav'
import { contentComponents } from '../constants/constants'
const { Header, Content, Sider } = Layout

const Dashboard = () => {
  const [content, setContent] = useState('home')
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <TopNav onChangeContent={(e) => setContent(e.key)} />
      </Header>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible>
          <SideNav onChangeContent={(e) => setContent(e.key)} />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {contentComponents[content]}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default Dashboard
