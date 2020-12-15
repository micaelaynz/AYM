import React from 'react';
import 'boostrap/dist/css/boostrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './components/CartWidget.js';

function NavBar() {

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">A&M</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#secciones">Secciones</Nav.Link>
          <Nav.Link href="#marcas">Marcas</Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar>
    </>
  );
}

export default NavBar