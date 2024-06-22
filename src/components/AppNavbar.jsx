import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetFilters, fetchNews ,  fetchNewsByKeyword, setSearchKeyword  } from '../features/newsSlice/newsSlice.js';

const AppNavbar = ({ categories, onSelectCategory }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
// handles logo click
  const handleLogoClick = () => {
    dispatch(resetFilters());
    dispatch(fetchNews({ page: 1, category: '' }));
    navigate('/');
  };
// handles when user clicks on home button
  const handleHomeClick = () => {
    dispatch(resetFilters());
    dispatch(fetchNews({ page: 1, category: '' }));
    navigate('/');
  };

  // handling search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(setSearchKeyword(searchTerm));
      dispatch(fetchNewsByKeyword({ page: 1, keyword: searchTerm }));
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          NewsMania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleHomeClick}>Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item
                  key={index}
                  onClick={() => onSelectCategory(category)}
                >
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
