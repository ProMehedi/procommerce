import { LinkContainer } from 'react-router-bootstrap'
import { DropdownButton, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { HomeOutlined, ShoppingOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <>
      <Navbar bg='white' expand='md'>
        <LinkContainer to='/'>
          <Navbar.Brand className='font-weight-bold'>
            <span className='text-danger'>PRO</span>COMMERCE
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/'>
              <Nav.Link>
                <HomeOutlined /> Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/shop'>
              <Nav.Link>
                <ShoppingOutlined />
                Shop
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <DropdownButton title='My Account' id='adminMenu' menuAlign='right'>
              <LinkContainer to='/login'>
                <NavDropdown.Item>Login</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/register'>
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
