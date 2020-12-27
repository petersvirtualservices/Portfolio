import React, { Component } from 'react';
import { Form, Button, Col} from 'react-bootstrap';
import Footer from './footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <br /><br />
                <p>charlene@peters-services.com  |  316-932-0245</p>
                <br /><br />
<Form>
  <Form.Row>
  <Form.Group as={Col} controlId="formName">
      <Form.Control type="name" placeholder="Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="email" placeholder="E-Mail" />
    </Form.Group>    
  </Form.Row>

  <Form.Group controlId="formMessage">
    <Form.Control placeholder="Type Your Message Here" />
  </Form.Group>

  <Form.Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Row>
</Form>

                <Footer />
            </div>
        )
    }
}

export default Contact