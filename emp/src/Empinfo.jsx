import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Empinfo() {
  const [emp, setEmp] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/employee").then((res1) => {
      res1.json().then((resp2) => {
        console.log(resp2);
        setEmp(resp2);
      });
    });
  }, []);
  function navto() {
    navigate("/Newemp");
  }
  function editemp(id) {
    navigate("/Updateemp");
  }
  return (
    <div>
      <h3>Employee Details</h3>
      <Row xs={1} md={3} className="g-4 mt-4">
        {emp.map((e, idx) => (
          <Col key={idx}>
            <Card className="bg-info text-white border-0 rounded shadow">
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                  <p>{e.email}</p>
                  <p>{e.phone}</p>
                  <p>{e.city}</p>
                </Card.Text>
                <Button variant="light" onClick={() => editemp(e.id)}>
                  Edit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button
        variant="info"
        className="text-white mt-5"
        onClick={() => navto()}
      >
        Add New Employee
      </Button>
    </div>
  );
}

export default Empinfo;
