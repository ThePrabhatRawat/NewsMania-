import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4 ">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; 2024 NewsMania Pvt Ltd. Follow us on:
            <a href="https://facebook.com" className="text-white mx-2">Facebook</a>
            <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
            <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
