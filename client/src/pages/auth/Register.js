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
import { toast, ToastContainer } from 'react-toastify'
import { auth } from '../../config/firebase'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [email, setEmail] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()

    const config = {
      url: 'http://localhost:3000/register/complete',
      handleCodeInApp: true,
    }

    // Send Confirmation Email
    await auth.sendSignInLinkToEmail(email, config)

    // Toastify Notification
    toast.success(
      `Email send to ${email}. Click the link the complete registration`
    )

    // Save Email to localStorage
    window.localStorage.setItem('registerEmail', email)

    // Clear the email form
    setEmail('')
  }

  return (
    <Container className='p-4'>
      <Row className='justify-content-center'>
        <Col lg='6' md='7'>
          <Card className='rounded'>
            <Card.Body>
              <h3 className='border-bottom pb-2 mb-4 text-danger'>Register</h3>
              <Form className='mb-0' onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <FormControl
                    type='email'
                    placeholder='Type Your Email Address . . .'
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <ToastContainer />
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

export default Register
