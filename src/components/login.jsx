import React from 'react';
import { Container, Button,Image,Col } from 'react-bootstrap';
import logo from "./curiosta_logo.png";
const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <Container>
      <Col xs={12} md={12} lg={12}>
        <div className="text-center">
          <div className="image-section">
          <Image src={logo} style={{"width":"20rem"}}></Image>
          </div>
          <div className="content-section">
            <input type="text" className="form-control" placeholder="Email" />
            <input type="password" className="form-control" placeholder="Password" />
            <Button variant="primary" onClick={onLogin}>Login</Button>
          </div>
        </div>
        </Col>
      </Container>
    </div>
  );
};

export default LoginPage;
