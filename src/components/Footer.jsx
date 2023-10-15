import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="px-5">
      <Row className="">
        <Col className="py-4 px-5 border-top">
          &copy; Copyright 2023 ListDiff.com | <Link>Privacy Policy</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
