import React from 'react';
import { Navbar, Nav, NavbarBrand, NavLink} from 'react-bootstrap';
import CartWidget from './components/CartWidget.js';

function NavBar() {

  return (
    <>
      <Navbar bg="light" variant="light">
        <NavbarBrand href="#home">A&M</NavbarBrand>
        <Nav className="mr-auto">
          <NavLink href="#secciones">Secciones</NavLink>
          <NavLink href="#marcas">Marcas</NavLink>
        </Nav>
        <CartWidget />
      </Navbar>
    </>
  );
}

export default NavBar