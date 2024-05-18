import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Updateemp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/employee").then((resp1) => {
      resp1.json().then((resp2) => {
        setName(resp2[0].name);
        setEmail(resp2[0].email);
        setPhone(resp2[0].phone);
        setCity(resp2[0].city);
      });
    });
  }, []);
  function empupdate(e) {}
  return (
    <div>
      <h3>Update Employee Form</h3>
      <Form className="mt-4" onSubmit={(e) => empupdate(e)}>
        <Form.Group className="mb-3" controlId="formGroupText1">
          <Form.Label>Employee Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupText2">
          <Form.Label>Phone Number: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupText3">
          <Form.Label>Employee City:</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Edit Employee
        </Button>
      </Form>
    </div>
  );
}

export default Updateemp;
