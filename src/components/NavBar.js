import React from 'react';
import { Navbar, Nav, NavbarBrand, NavLink} from 'react-bootstrap';

const NavBar = () => {

    return(
   <>
   <Navbar bg="light" variant="light">
    <NavbarBrand href="#home">A&M</NavbarBrand>
    <Nav className="mr-auto">
      <NavLink href="#secciones">Secciones</NavLink>
      <NavLink href="#marcas">Marcas</NavLink>
    </Nav>
    </Navbar>
   </>
  )
 }

export default NavBar