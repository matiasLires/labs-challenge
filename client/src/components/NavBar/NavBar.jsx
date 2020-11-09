import React from "react";

import SearchBar from "../SearchBar/SearchBar";

import { Navbar, Nav } from 'react-bootstrap';


export default function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <SearchBar />
      </Navbar>
    </div>
  );
}