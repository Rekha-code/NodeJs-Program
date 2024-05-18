import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [cshow, setCshow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [pic, setPic] = useState("");

  function handleShow() {
    setShow(!show);
  }
  function handleCshow() {
    setCshow(!cshow);
  }

  function addUser(e) {
    e.preventDefault();
    fetch("http://localhost:4000/api/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, pass1, pass2 }),
    });
  }
  return (
    <div>
      <Form className="text-start" onSubmit={addUser}>
        <Form.Group className="mb-3" controlId="formGruopName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Enter Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
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
        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Label>Confirm Password</Form.Label>
          <div className="d-flex justify-content-evenly align-items-center">
            <Form.Control
              type={cshow ? "text" : "password"}
              placeholder="Confirm Password"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
            />
            <i
              className="fa-solid fa-eye fs-5 text-secondary"
              style={{ marginLeft: "-30px" }}
              onClick={() => handleCshow()}
            ></i>
          </div>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload Profile Picture</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setPic(e.target.file[0])}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
