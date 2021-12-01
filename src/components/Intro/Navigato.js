import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import {
  Link, NavLink
} from "react-router-dom";
const Navigato = () => {
  return (
    <Navbar className=' text-white  ' expand="lg">
      <Navbar.Brand href="#introhome" className='text-white' >My Portpolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-center">
          <Nav.Link className='text-decoration-none text-success fs-5' href='#introhome'>Home</Nav.Link>
          <Nav.Link className='text-decoration-none text-success fs-5' href='#about'>About</Nav.Link>
          <Nav.Link className='text-decoration-none text-success fs-5' href='#skillss'>Skills</Nav.Link>
          <Nav.Link className='text-decoration-none text-success fs-5' href='#service'>Services</Nav.Link>
          <Nav.Link className='text-decoration-none text-success fs-5' href='#contact'>Contact</Nav.Link>

         
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigato;