import React from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap'

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Logged!')
  }

  return (
    <Container className='p-4'>
      <Row className='justify-content-center'>
        <Col lg='6' md='7'>
          <Card className='rounded'>
            <Card.Body>
              <h3 className='border-bottom pb-2 mb-4 text-danger'>Register</h3>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <FormControl
                    type='email'
                    placeholder='Type Your Email Address . . .'
                    autoFocus
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

export default Register
