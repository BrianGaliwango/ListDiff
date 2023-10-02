import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="px-4">
      <Row className="px-5">
        <Col className=" py-4 border-top">
          &copy; Copyright 2023 ListDiff.com | <Link>Privacy Policy</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
