import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    <>
    <h5>Contáctanos</h5> 
    <Form>
    <Form.Group className="mb-3 col-8 " >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3 col-8 " >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresá tu mail" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-3 col-8 ">
      <Form.Control type="text" placeholder="Deja tu comentario " />
      </Form.Group>
                
              
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    </>
    
  )
}



export default Contacto