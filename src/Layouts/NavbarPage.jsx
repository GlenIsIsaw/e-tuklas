import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // State to control Offcanvas visibility

  // Function to handle hover for dropdowns
  const handleMouseEnter = (dropdown) => setDropdownOpen(dropdown);
  const handleMouseLeave = () => setDropdownOpen(null);

  const handleClose = () => {
    document.body.classList.remove('offcanvas-open');
    setShow(false);
  };

  const handleShow = () => {
    document.body.classList.add('offcanvas-open');
    setShow(true);
  };

  return (
    <>
      <Navbar bg="" variant="dark" expand="lg" className="shadow-lg sticky-top">
        <Container>
         <Navbar.Brand href="/">
            <img
              alt=""
              src="./src/assets/images/a90a546d-93ca-43c6-b931-99c062f67ed1-removebg-preview-Picsart-AiImageEnhancer (1).png"
              width="120"
              height=""
              className="d-inline-block align-middle"
            />{' '}
           
          </Navbar.Brand>
          {/* Navbar Toggle for opening the offcanvas on mobile */}
          <Navbar.Toggle
            aria-controls="offcanvas-navbar"
            onClick={handleShow}
          />

          {/* Navbar Collapse (only for larger screens, will be hidden on small screens) */}
          <Navbar.Collapse id="offcanvas-navbar" className="d-none d-lg-flex">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="mx-2 navnav">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-2 navnav">
                Kasaysayan
              </Nav.Link>
                  {/* Experience Dropdown - Hover Enabled */}
              <NavDropdown
                title="Pag - Danas"
                id="experience-dropdown"
                show={dropdownOpen === "experience"}
                onMouseEnter={() => handleMouseEnter("experience")}
                onMouseLeave={handleMouseLeave}
                className="mx-2 navnav"
              >
                <NavDropdown.Item as={Link} to="/experience/cultural">
                 Hiling
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/experience/festivals">
                  Pangkalusugan
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/experience/travel">
                 Paniniwala
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/experience/thanks">
                 Pasasalamat
                </NavDropdown.Item>
              </NavDropdown>

              {/* Traditions Dropdown - Hover Enabled */}
              <NavDropdown
                title="Tradisyon"
                id="tradition-dropdown"
                show={dropdownOpen === "traditions"}
                onMouseEnter={() => handleMouseEnter("traditions")}
                onMouseLeave={handleMouseLeave}
                className="mx-2 navnav"
              >
                <NavDropdown.Item as={Link} to="/tradition/rituals">
                  Esperituwal
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tradition/customs">
                  Kultural
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" className="mx-2 navnav">
                Impormasyon
              </Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile */}
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>e-Tuklas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" className="nav-mobile" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-mobile" onClick={handleClose}>
             Kasaysayan
            </Nav.Link>
           
            {/* Experience Dropdown for Mobile (Click to Open) */}
            <NavDropdown title="Pag - Danas" id="experience-dropdown-mobile" className="nav-mobile" variant="custom-brown">
              <NavDropdown.Item as={Link} to="/experience/cultural" onClick={handleClose}>
                Cultural Experience
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/experience/festivals" onClick={handleClose}>
                Festivals
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/experience/travel" onClick={handleClose}>
                Travel Experience
              </NavDropdown.Item>
            </NavDropdown>

            {/* Traditions Dropdown for Mobile (Click to Open) */}
            <NavDropdown title="Tradisyon" id="tradition-dropdown-mobile" className="nav-mobile">
              <NavDropdown.Item as={Link} to="/tradition/rituals" onClick={handleClose}>
                Rituals
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tradition/customs" onClick={handleClose}>
                Customs & Beliefs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tradition/heritage" onClick={handleClose}>
                Heritage & Legacy
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="nav-mobile" onClick={handleClose}>
              Impormasyon
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-1 border-3 border border-dark"
              aria-label="Search"
            />
            <Button variant="outline-dark search">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarPage;
