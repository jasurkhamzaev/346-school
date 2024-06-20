import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

function Contact() {
  return (
    <div className='contact-page'>
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Get In Touch</h1>
          <p className='text-center w-75 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae pariatur qui quos aspernatur, voluptatem autem possimus esse quo consequatur omnis, soluta consectetur ullam ipsum cum!</p>
        </div>
      </header>

      <div className='container my-5 d-flex justify-content-center'>
        <Form id='contact-form'>
          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='First name' />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Last name' />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='Your address' />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={8} style={{ resize: 'none' }} />
          </Form.Group>


          <Button variant="danger btn-lg" type='submit'>Submit</Button>
          <hr style={{width: '100%'}}/>
        </Form>
      </div>
    </div>
  )
}

export default Contact;