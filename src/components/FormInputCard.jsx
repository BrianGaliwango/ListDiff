import React from "react";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";


const FormInputCard = () => {
  return (
    <Card style={{width: "28rem"}}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div>
            <Form.Label>List A</Form.Label>
            <div>
              <span>00</span>
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={16} />
        </Form.Group>
      </Form>
    </Card>
  );
};

export default FormInputCard;
