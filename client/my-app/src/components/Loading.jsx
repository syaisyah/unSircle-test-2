import React from "react";
import { Container, Spinner } from "react-bootstrap";


export default function Loading() {
  return (
    <Container fluid>
      <Spinner animation="grow" />
    </Container>
  );
}
