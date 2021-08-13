import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Container fluid className="w-25 p-5 border border-secondary " style={{ marginTop: "100px" }}>
      <h3 className="text-center">Register</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="full name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>NIK</Form.Label>
          <Form.Control type="text" placeholder="NIK" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="role" />
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit
        </Button>
        <p className="mt-4">
          Already have an account ? <Link to="/login">Login</Link>
        </p>
      </Form>
    </Container>
  );
}
