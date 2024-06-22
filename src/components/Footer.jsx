import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4 ">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; 2024 NewsMania Pvt Ltd. Follow us on:
            <Link to="https://www.linkedin.com/in/prabhat-rawat-6619a2247/" className="text-white mx-2">LinkedIn</Link>
            <Link to="https://x.com/PrabhatRaw95796" className="text-white mx-2">Twitter</Link>
            <Link to="https://www.instagram.com/prabhatrawat35/" className="text-white mx-2">Instagram</Link>
            <Link to="https://github.com/ThePrabhatRawat" className="text-white mx-2">GitHub</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
