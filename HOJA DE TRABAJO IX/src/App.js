
import User from './Apis/Usuarios'
import Chucky from './Apis/Chuck'
import First from './Apis/Principal'
import Beb from './Apis/Bebida'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import {Route,  Routes} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div>
      <Header />
       <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home">MENÚ APIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Principal</Nav.Link>
            <Nav.Link href="/Users">Usuario</Nav.Link>
            <Nav.Link href="/Chuck">Chuck</Nav.Link>
            <Nav.Link href="/Bebida">Bebida</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div>
        {/* { <nav>
          <ul>
            <li>
              <Link to='/'>Frist</Link>
            </li>
          </ul>
        </nav>} */}

        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/Chuck" element={<Chuck />} />
          <Route path="/Users" element={<Usuario />} />
          <Route path="/Bebida" element={<Bebida />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

function Usuario() {
  return <User />;
}

function Chuck() {
  return <Chucky />;
}

function Bebida() {
  return <Beb />;
}