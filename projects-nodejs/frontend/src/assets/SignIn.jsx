import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");

  function handleShow() {
    setShow(!show);
  }

  function login(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Form className="text-start" onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Password</Form.Label>
          <div className="d-flex justify-content-evenly align-items-center">
            <Form.Control
              type={show ? "text" : "password"}
              placeholder="Password"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
            />
            <i
              className="fa-solid fa-eye fs-5 text-secondary"
              style={{ marginLeft: "-30px" }}
              onClick={() => handleShow()}
            ></i>
          </div>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Sign In
          </Button>
          <Button variant="danger">Get Guest User Info</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
