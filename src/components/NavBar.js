import React from 'react'

const NavBar = () => {

    return(
   <>
   <navbar bg="light" variant="light">
    <navbar.brand href="#home">A&M</navbar.brand>
    <nav className="mr-auto">
      <nav.Link href="#secciones">Secciones</nav.Link>
      <nav.Link href="#marcas">Marcas</nav.Link>
    </nav>
    <form inline>
      <formControl type="text" placeholder="Buscar un producto" className="mr-sm-2" />
      <button variant="outline-primary">Search</button>
    </form>
    </navbar>
   </>
  )
 }

export default NavBar