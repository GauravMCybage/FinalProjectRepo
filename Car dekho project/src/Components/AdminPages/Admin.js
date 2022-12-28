import React from 'react'
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Admin() {
  return (
    <>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My Car Dekho Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
             <NavDropdown title=" Dropdown Function List " id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/viewbuyer">
                  View Buyer
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/viewseller">
                  View Seller
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/viewprovider">
                  View Provider
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/changeNewCardtil">
                  Change Car Details New Car
              </NavDropdown.Item>
             
             
              <NavDropdown.Item href="/admin/deletebuyer">
                  Delete Buyer
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/deleteseller">
                  Delete Seller
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/deleteCarprovider">
                  Delete Provider
              </NavDropdown.Item>              
            </NavDropdown>
            <Nav.Link href="/"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Outlet />
  </>
  )
}
export default  Admin






 