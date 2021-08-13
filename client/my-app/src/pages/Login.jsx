import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({});

  const login = (user) => {
    //dispatch
    console.log(user)
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Container fluid className="w-25 p-5 border border-secondary" style={{ marginTop: "200px" }}>
      <h3 className="text-center">Login</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" name="email" onChange={(e) => handleOnChange(e)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" name="password" onChange={(e) => handleOnChange(e)} />
        </Form.Group>

        <Button onClick={login} variant="warning" type="submit">
          Submit
        </Button>
        <p className="mt-4">
          Don't have an account yet ? <Link to="/register">Register</Link>
        </p>
      </Form>
    </Container>
  );
}
