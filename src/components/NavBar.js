import React from 'react'
import {Navbar, Nav, NavLink, NavBarBrand,FormControl, Form, Button} from 'react-bootstrap'

const NavBar = () => {

    return(
   <>
   <Navbar bg="light" variant="light">
    <NavbarBrand href="#home">A&M</NavbarBrand>
    <Nav className="mr-auto">
      <NavLink href="#secciones">Secciones</NavLink>
      <NavLink href="#marcas">Marcas</NavLink>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Buscar un producto" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Navbar>
   </>
  )
 }

export default NavBar