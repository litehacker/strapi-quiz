import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function _404Component() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="col-sm-3">
          </div>
          <div className="col-sm-6" >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="e-posta adresiniz" />
              <Form.Text className="text-muted">
                Email adresiniz sistemimize kayıtlı ise, e-posta adresinizi kontrol edip, yazılı olan adımları takip ediniz.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Şifreyi yenile
            </Button>
          </Form>
          </div>
          <div className="col-sm-3">
          </div>
        </div>
      </div>
    </div>
  );
}

export default _404Component;
