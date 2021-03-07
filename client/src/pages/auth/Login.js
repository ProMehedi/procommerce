import React, { useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { auth } from '../../config/firebase'
import { USER_LOGIN_SUCCESS } from '../../store/constants/userConstant'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user

        const idTokenResult = user.getIdTokenResult()
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: {
            email: user.email,
            token: idTokenResult,
          },
        })
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  return (
    <Container className='p-4'>
      <Row className='justify-content-center'>
        <Col lg='6' md='7'>
          <Card className='rounded'>
            <Card.Body>
              <h3 className='border-bottom pb-2 mb-4 text-danger'>Login</h3>
              <Form className='mb-0' onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label htmlFor='email'>Email Address</Form.Label>
                  <FormControl
                    id='email'
                    type='email'
                    placeholder='Type Your Email Address . . .'
                    autoFocus
                    required
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
                  SUBMIT
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
