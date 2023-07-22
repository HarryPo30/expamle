import React, { useState } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Row, Col, Button } from 'react-bootstrap';

const InventoryPage = () => {
    const [show,setShow]=useState(false)
    
    const startshow=()=>setShow(true)
    const starthide=()=>setShow(false)
    
  return (
      <div className="inventory-page">
        <Col xs={12} md={6} lg={4}>
      <Navbar bg="light" variant="success" expand="lg" className='text-center' collapseOnSelect  >
        <Container className=''>
          <Navbar.Brand href="#">
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              <Nav.Link href="#">Inbound Items</Nav.Link>
              <Nav.Link href="#">Approve Requests</Nav.Link>
             
          
              <Nav.Link href="#">Account</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="content-container">
        <div className="text-center">
          <h1>Inventory Page</h1>
          <p>This is the inventory page content.</p>
          <Form className="justify-content-center mt-4 shadow p-3">
            <FormControl type="text" placeholder="Search" className="shadow-none" />
          </Form>
          <Row className="mt-4 justify-content-center">
            <Col xs={12} sm={4}md={4}>
              <Button variant="success" className="w-100 mb-3 shadow">Word 1</Button>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <Button variant="success" className="w-100 mb-3 shadow">Word 2</Button>
            </Col>
            <Col xs={12} sm={4} md={4}>
              <Button variant="success" className="w-100 mb-3 shadow">Word 3</Button>
            </Col>
          </Row>
        </div>
      </Container>
            </Col>
    </div>
  );
};

export default InventoryPage;
