import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import {
   Link
  } from "react-router-dom";
const Navigato = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Portpolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='text-decoration-none fs-4' to='/introhome'>Home</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigato;