import firebase from 'firebase'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {
  HomeOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../store/actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)
  const { email } = user

  const handleLogout = () => {
    // Logout From Firebase
    firebase.auth().signOut()

    // Dispatch From Store
    dispatch(userLogout())

    // Redirect After Login
    history.push('/')
  }

  return (
    <>
      <Navbar bg='white' expand='md'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='font-weight-bold'>
              <span className='text-danger'>PRO</span>COMMERCE
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
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
            {email ? (
              <Nav>
                <NavDropdown title='My Account' id='adminMenu' alignRight>
                  <LinkContainer to='/login'>
                    <NavDropdown.Item>Login</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <NavDropdown.Item>Register</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>
                    <LogoutOutlined className='mr-2' /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav>
                <LinkContainer to='/dashboard'>
                  <Nav.Link>
                    <UserOutlined />
                    LOGIN / REGISTER
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
