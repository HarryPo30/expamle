import React from 'react';
import { Container, Navbar, Nav, Row, Col, Image } from 'react-bootstrap';
import logo from "./curiosta_logo.png"

const ThirdPage = () => {
  return (
    <div className="third-page">
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Hi Hari!
          <Image src={logo} alt="Logo" className="navbar-logo" roundedCircle style={{"width":"5rem","height":"3rem"}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Inbound Items</Nav.Link>
              <Nav.Link href="#">Approve Requests</Nav.Link>
              <Nav.Link href="#">Fulfill Requests</Nav.Link>
              <Nav.Link href="#">Manage Masters</Nav.Link>
              <Nav.Link href="#">Inventory Reports</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Account</Nav.Link>
              <Nav.Link href="#">Transactions</Nav.Link>
              <Nav.Link href="#">Settings</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className="bg-success py-4 rounded">
          <Row className="row-cols-2 g-4">
            <Col sm={6} lg={3}>
              <div className="bg-white text-center p-2 m-2 rounded">Inbound</div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="bg-white text-center p-2 m-2 rounded">Requests</div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="bg-white text-center p-2 m-2 rounded">Full Fill</div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="bg-white text-center p-2 m-2 rounded">Accept Return</div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ThirdPage;
