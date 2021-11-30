import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import {
   Link, NavLink
  } from "react-router-dom";
const Navigato = () => {
    return (
        <Navbar className=' text-white py-3  '  expand="lg">
          <Navbar.Brand href="#home" className='text-white' >My Portpolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-center">
              <Nav.Link className='text-decoration-none fs-4 ms-3' href='#introhome'>Home</Nav.Link>
              <Nav.Link className='text-decoration-none fs-4 ms-3' href='#about'>About</Nav.Link>
              <Nav.Link className='text-decoration-none fs-4 ms-3' href='#skillss'>Skills</Nav.Link>
              <Nav.Link className='text-decoration-none fs-4 ms-3' href='#service'>Services</Nav.Link>
              <Nav.Link className='text-decoration-none fs-4 ms-3' href='#contact'>Contact</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
};

export default Navigato;