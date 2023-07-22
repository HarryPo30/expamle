import React from 'react';
import { Container, Button,Image,Col,Row } from 'react-bootstrap';
import logo from "./curiosta_logo.png"
const HomePage = ({ onGetStarted }) => {
  return (
    <div className="homepage">
      <Container >
        <Col xs={12} md={12} lg={3}>
        <div className="text-center">
          <div className=" mt-5" >
    <Image src={logo} style={{"width":"20rem","height":"10rem"}} thumbnail></Image>
          </div>
          <div className="content-section">
            <h1 className='mt-5'>Random Text</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Col xs={12} className=''>
            <Button variant="primary" onClick={onGetStarted} className='w-100 mt-5'>Get Started</Button>
            </Col>
          </div>
        </div>
        </Col>
      </Container>
    </div>
  );
};

export default HomePage;
