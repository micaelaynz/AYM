import React from 'react'

const NavBar = () => {

    return(
   <>
   <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">AM</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#secciones">Secciones</Nav.Link>
      <Nav.Link href="#marcas">Marcas</Nav.Link>
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