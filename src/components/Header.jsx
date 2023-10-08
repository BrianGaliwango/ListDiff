import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary border-bottom">
      <Container fluid className="px-5 py-3">
        <Navbar.Brand href="/" className="">ListDiff.Com</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="px-2 py-1" />
        <Navbar.Collapse className="">
          <Nav className="mx-auto gap-4">
            <Nav.Link href="/">Compare Lists</Nav.Link>
            <Nav.Link href="/compareText">Compare Text</Nav.Link>
            <Nav.Link href="/textFixer">Text Fixer</Nav.Link>
            <Nav.Link href="/csvSplitter">CSV Splitter</Nav.Link>
            <Nav.Link href="#textColumnizer">Text Columnizer</Nav.Link>
            <Nav.Link href="#columnExtractor">Column Extractor</Nav.Link>
            <Nav.Link href="#VLookupOnline">VLookup Online</Nav.Link>
            <NavDropdown title="Others" id="basic-nav-dropdown">
              <NavDropdown.Item href="#topTypingTest" className="px-2 py-1">
                TopTypingTest.Com
              </NavDropdown.Item>
              <NavDropdown.Item href="#numberToBase" className="px-2 py-1">
                NumberToBase.com
              </NavDropdown.Item>
              <NavDropdown.Item href="#covertXY" className="px-2 py-1">
                ConvertXY.com
              </NavDropdown.Item>
              <NavDropdown.Item href="timesTable" className="px-2 py-1">
                TimesTable.co
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#randomNamesGenerator"
                className="px-2 py-1"
              >
                RandomNamesGenerator.com
              </NavDropdown.Item>
              <NavDropdown.Item href="#about" className="px-2 py-1">
                About
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
