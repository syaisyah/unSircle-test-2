import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="light" variant="light" className="mb-5">
      <Container fluid>
        <h2 className="">TokoKu</h2>
        <div className="">
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/features" className="mx-2">Add Product</Link>
          <Link to="/pricing" className="mx-2">Permission</Link>
        </div>
      </Container>
    </Navbar>
  );
}
