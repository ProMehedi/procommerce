import React, { useState } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

const Header = () => {
  const [current, setCurrent] = useState('mail')

  const handleClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Menu.Item key='mail' icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key='app' icon={<AppstoreOutlined />}>
        Shop
      </Menu.Item>
      <SubMenu key='account' icon={<UserOutlined />} title='My Account'>
        <Menu.Item key='setting:1'>Login</Menu.Item>
        <Menu.Item key='setting:2'>Register</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default Header
