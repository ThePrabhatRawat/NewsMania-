// src/components/Layout.js
import React from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from './AppNavbar';
import Footer from './Footer';

const Layout = ({ children, categories, onSelectCategory, onHomeClick }) => {
  return (
    <>
      <AppNavbar categories={categories} onSelectCategory={onSelectCategory} onHomeClick={onHomeClick} />
      <Container className="flex-grow-1">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
