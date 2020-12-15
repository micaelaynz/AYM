import React from 'react';
import 'boostrap/dist/css/boostrap.min.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

const App = () => {
  return(
    <>
    <NavBar />
    <ItemListContainer />
    </>
  )
}

export default App
