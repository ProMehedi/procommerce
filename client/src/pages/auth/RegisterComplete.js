import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap'
import { LoadingOutlined } from '@ant-design/icons'
import { auth } from '../../config/firebase'
import { toast } from 'react-toastify'

const RegisterComplete = ({ history }) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registeredEmail = window.localStorage.getItem('registerEmail') || ''

  useEffect(() => {
    setEmail(registeredEmail)
  }, [registeredEmail])

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!email || !password) {
      toast.error('Email and Password is required!')
      setLoading(false)
      return
    } else if (password.length < 8) {
      toast.error('Password must be at least 8 characters long!')
      setLoading(false)
      return
    }

    try {
      const result = await auth.signInWithEmailLink(email, window.location.href)
      if (result.user.emailVerified) {
        // Remove User Email from localStorage
        window.localStorage.removeItem('registerEmail')

        // Get User Id Token
        let user = auth.currentUser
        await user.updatePassword(password)
        const idTokenResult = await user.getIdTokenResult()

        // Save to Redux Store
        console.log(idTokenResult)

        // Redirect After Successfully Login
      } else {
        toast.error(`Sorry, your ${email} is not verified!`)
      }
    } catch (error) {
      toast.error(error.message)
    }
    setLoading(false)
  }

  return (
    <Container className='p-4'>
      <Row className='justify-content-center'>
        <Col lg='6' md='7'>
          <Card className='rounded'>
            <Card.Body>
              <h3 className='border-bottom pb-2 mb-4 text-danger'>
                Compelte Registration
              </h3>
              <Form className='mb-0' onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label htmlFor='email'>Email Address</Form.Label>
                  <FormControl
                    id='email'
                    type='email'
                    autoFocus
                    required
                    disabled
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='password'>Password</Form.Label>
                  <FormControl
                    id='password'
                    type='password'
                    placeholder='Type Your Password . . .'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  type='submit'
                  variant='danger'
                  className='btn-outline-danger'
                >
                  COMPLETE REGISTRATION {loading && <LoadingOutlined />}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterComplete
