import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

const Register = (props) => {
  return (
    <Form>
      <FormGroup className='formGroup' row>
        <Col sm='2'>
          <Label for="username"><i className="far fa-user-circle"></i></Label>
        </Col>
        <Col sm='auto'>
          <Input type="text" name="username" id="username" placeholder="Username" />
        </Col>
      </FormGroup>
      <FormGroup className='formGroup' row>
        <Col sm={2}>
          <Label for="examplePassword"><i className="fas fa-unlock-alt"></i></Label>
        </Col>
        <Col sm='auto'>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </Col>
      </FormGroup>
      <Button>Continue</Button>
    </Form>
  )
}

export default Register