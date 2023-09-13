import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar'
import DetalleProducto from './componentes/detalleProducto'
import Catalogo from './componentes/catalogo'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          {/* Ruta para la página de inicio */}
          <Route exact path="/" component={ItemListContainer} />

          {/* Ruta para la página de categoría */}
          <Route path="/category/:id" component={ItemListContainer} />

          {/* Ruta para la página de detalle de producto */}
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App
