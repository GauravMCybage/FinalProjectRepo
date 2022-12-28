// // import { orange } from '@mui/material/colors';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Header() {
//     return (

// <div className="header">
//                 <Navbar bg="light" expand="lg">
//                     <Container fluid>
//                         <Navbar.Brand href="/">Car Dekho</Navbar.Brand>
//                         <Navbar.Toggle aria-controls="navbarScroll" />
//                         <Navbar.Collapse id="navbarScroll">
//                             <Nav
//                                 className="me-auto my-2 my-lg-0"
//                                 style={{ maxHeight: '100px', backgroundColor: "orange"}}
//                                 navbarScroll
//                             >
//                                 {/* <Nav.Link href="#action1">Home</Nav.Link> */}
//                                 <NavDropdown title="Login" id="navbarScrollingDropdown">
//                                     <NavDropdown.Item href="/signin/buyer-signin"> Buyer Login</NavDropdown.Item>
//                                     <NavDropdown.Item href="#action4">
//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="/signin/seller-signin"> Seller Login</NavDropdown.Item>
//                                     <NavDropdown.Item href="#action4">
//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="/signin/provider-signin">Provider Login</NavDropdown.Item>
//                                 </NavDropdown>
//                                 <NavDropdown title="Registration" id="navbarScrollingDropdown">
//                                     <NavDropdown.Item href="/signup/buyer-register"> Buyer Registration</NavDropdown.Item>
//                                     <NavDropdown.Item href="#action4">

//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="/signup/seller-register"> Seller Registration</NavDropdown.Item>
//                                     <NavDropdown.Item href="#action4">

//                                     </NavDropdown.Item>
//                                     <NavDropdown.Item href="/signup/provider-register">
//                                         Provider Registration
//                                     </NavDropdown.Item>
//                                 </NavDropdown>
//                                 <Nav.Link href="/Pages/Offers">
//                                     Offers
//                                 </Nav.Link>
//                                 <Nav.Link href="/Pages/Aboutus">
//                                     About Us
//                                 </Nav.Link>
//                                 <Nav.Link href="/Pages/Review">
//                                     Review
//                                 </Nav.Link>
//                                 <Nav.Link href="/Pages/Contactus">
//                                     Contact Us
//                                 </Nav.Link>
//                                 {/* <Nav.Link href="Cartt/Main">
//                                     Car List
//                                 </Nav.Link > */}
//                             </Nav>
//                             <Form className="d-flex">
//                                 <Form.Control
//                                     type="search"
//                                     placeholder="Search"
//                                     className="me-2"
//                                     aria-label="Search"
//                                 />
//                                 <Button variant="outline-success">Search</Button>
//                             </Form>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//             </div>
//     );
// }

//             export default Header
import "./header.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";

const Header = () => {
  const navigate=useNavigate()
  //   const [navbar, setNavbar] = useState(false);
  //   const changeBg = () => {
  //     if (window.scrollY >= 100) {
  //       setNavbar(true);
  //     } else {
  //       setNavbar(false);
  //     }
  //   };
  //   window.addEventListener("scroll", changeBg);
  return (
    <>
      <nav
        className={
          "navbar navbar-expand top active"
          //                 <Navbar bg="light" expand="lg">
        }
      >
        <a href="/" className="navbar-brand">
          Car Dekho
        </a>

        <div>
          <ul className="navbar-nav">
            <NavDropdown title="Login" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/signin/buyer-signin">
                {" "}
                Buyer Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4"></NavDropdown.Item>
              <NavDropdown.Item href="/signin/seller-signin">
                {" "}
                Seller Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4"></NavDropdown.Item>
              <NavDropdown.Item href="/signin/provider-signin">
                Provider Login
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Registration" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/signup/buyer-register">
                {" "}
                Buyer Registration
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4"></NavDropdown.Item>
              <NavDropdown.Item href="/signup/seller-register">
                {" "}
                Seller Registration
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4"></NavDropdown.Item>
              <NavDropdown.Item href="/signup/provider-register">
                Provider Registration
              </NavDropdown.Item>
            </NavDropdown>
            
            <li className="nav-item">
              <a href="/Pages/Aboutus" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/signin/Admin-signin" className="nav-link">
                Admin
              </a>
            </li>
           
            <li className="nav-item">
              <a href="" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/Cartt/Cart" className="nav-link">
                Car List
              </a>
            </li>
            
            <li className="nav-item">
              <button onClick={()=>{
                if(sessionStorage.getItem('loginStatus')==undefined){
                  alert("Please Login First")
                  navigate('/')
                }else{
                  sessionStorage.clear()
                  navigate('/')
                }
                 
              }}>
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
