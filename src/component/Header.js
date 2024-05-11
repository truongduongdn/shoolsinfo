import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Menu.css';
import { NavLink } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import CatalogSchool from '../pages/CatalogSchool';

function Header(props) {
  return (
    <div>

      <Navbar expand="lg" className="container_header">
        <Container>
          <div className="logo-container">
            <a href='/' className='Linklogo'><img src='./asset/logoSchool.png' alt="Logo" className="logo" /></a>
          </div>
          <div className='nav'>
            <Navbar.Toggle aria-controls=" basic-navbar-nav" />
            <Navbar.Collapse id=" basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/Aboutus" className="menu-color">About us</Nav.Link>
                <NavDropdown title="All School" id="basic-nav-dropdown" className="bg-white" >
                  <NavDropdown.Item Link to={"./ElementSchool"}>Element School</NavDropdown.Item>
                  <NavDropdown.Item Link to={"./JuniorHighSchool"}>Junior School</NavDropdown.Item>
                  <NavDropdown.Item Link to={"./HighSchool"}>High School</NavDropdown.Item>

                </NavDropdown>
                <Nav.Link href="./ContactPage" className=" menu-color">Contact us</Nav.Link>
                <Nav.Link href="#Login" className=" menu-color">Login</Nav.Link>
                <Nav.Link href="#Signup" className=" menu-color">Sign Up</Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <CatalogSchool />
    </div>
  );
}

export default Header;