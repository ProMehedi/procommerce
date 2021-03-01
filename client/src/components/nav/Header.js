import React, { useState } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { SubMenu, Item } = Menu

const Header = () => {
  const [current, setCurrent] = useState('mail')

  const handleClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <nav className='bg-white border-bottom'>
      <div className='container'>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode='horizontal'
          className='border-0'
        >
          <Item key='home' icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Item>
          <Item key='shop' icon={<AppstoreOutlined />}>
            <Link to='/shop'>Shop</Link>
          </Item>
          <SubMenu
            key='account'
            icon={<UserOutlined />}
            title='My Account'
            className='float-right'
          >
            <Item key='login'>
              <Link to='/login'>Login</Link>
            </Item>
            <Item key='register'>
              <Link to='/register'>Register</Link>
            </Item>
          </SubMenu>
        </Menu>
      </div>
    </nav>
  )
}

export default Header
