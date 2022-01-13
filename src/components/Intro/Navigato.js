import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Me from "../../img/mern.jpg";

import {
  Link, NavLink
} from "react-router-dom";
const Navigato = () => {
  return (
    <Navbar  className=' text-white  ' expand="lg" >
    <div className="img-fluid">
    <img src={Me} className='w-50 h-50' alt="" />
    </div>
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