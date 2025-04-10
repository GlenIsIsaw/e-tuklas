import React, { useState } from "react";
import NavImg from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
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
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);

   // Search keyword mapping
   const searchRoutes = {
    // English terms
    'home': '/',
    'kasaysayan': '/kasaysayan',
    'history': '/kasaysayan',
    'hiling': '/pag-danas/hiling',
    'prayer': '/pag-danas/hiling',
    'health': '/pag-danas/pangkalusugan',
    'belief': '/pag-danas/paniniwala',
    'thanks': '/pag-danas/pasasalamat',
    'tradition': '/tradisyon',
    'spiritual': '/tradisyon/esperituwal',
    'culture': '/tradisyon/kultural',
    'information': '/impormasyon',
    
    // Filipino terms
    'tahanan': '/',
    'kwento': '/kasaysayan',
    'panalangin': '/pag-danas/hiling',
    'kalusugan': '/pag-danas/pangkalusugan',
    'pananampalataya': '/pag-danas/paniniwala',
    'pasasalamat': '/pag-danas/pasasalamat',
    'kaugalian': '/tradisyon',
    'esperitwal': '/tradisyon/esperituwal',
    'kultura': '/tradisyon/kultural',
    'impormasyon': '/impormasyon',
    'nazareno': '/kasaysayan',
    'ang nazareno': '/',
    'capalonga': '/kasaysayan',
     'mananaliksik': '/impormasyon',
      'konteksto': '/',
      'paniniwala': '/pag-danas/paniniwala',
      'pangkalusugan': '/pag-danas/pangkalusugan',
      'esperituwal': '/tradisyon/esperituwal',
      'kultural': '/tradisyon/kultural',
      'simbahan': '/kasaysayan',
      'himala': '/kasaysayan',
      'sanggunian': '/kasaysayan',
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase();
  
    // First check for exact keyword match
    if (searchRoutes[term]) {
      navigate(searchRoutes[term]);
    } else {
      // If no exact match, try partial match
      const partialMatch = Object.keys(searchRoutes).find(keyword =>
        keyword.toLowerCase().includes(term)
      );
  
      if (partialMatch) {
        navigate(searchRoutes[partialMatch]);
      } else {
        // Fallback to generic search results page
        navigate('/search-results', { state: { query: searchTerm } });
      }
    }
  
    setSearchTerm("");
    handleClose(); // Close the offcanvas if open
  };
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
              src={NavImg}
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
              <Nav.Link href="/" className="mx-2 navnav">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/kasaysayan" className="mx-2 navnav">
                Kasaysayan
              </Nav.Link>
                  {/* Experience Dropdown - Hover Enabled */}
              <NavDropdown
                title="Danas"
                id="experience-dropdown"
                show={dropdownOpen === "experience"}
                onMouseEnter={() => handleMouseEnter("experience")}
                onMouseLeave={handleMouseLeave}
                className="mx-2 navnav"
              >
                <NavDropdown.Item as={Link} to="/pag-danas/hiling">
                 Hiling
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pag-danas/pangkalusugan">
                  Pangkalusugan
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pag-danas/paniniwala">
                 Paniniwala
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pag-danas/pasasalamat">
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
                <NavDropdown.Item as={Link} to="/tradisyon/espirituwal">
                Espirituwal
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tradisyon/kultural">
                  Kultural
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/impormasyon" className="mx-2 navnav">
                Impormasyon
              </Nav.Link>
              
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  const matches = Object.keys(searchRoutes).filter(keyword => 
                    keyword.toLowerCase().includes(e.target.value.toLowerCase())
                  );
                  setSuggestions(matches.slice(0, 5));
                }}
              />
              <Button variant="outline-light" type="submit">Search</Button>
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
            <Nav.Link as={Link} to="/kasaysayan" className="nav-mobile" onClick={handleClose}>
             Kasaysayan
            </Nav.Link>
           
            {/* Experience Dropdown for Mobile (Click to Open) */}
            <NavDropdown title="Danas" id="experience-dropdown-mobile" className="nav-mobile" variant="custom-brown">
              <NavDropdown.Item as={Link} to="/pag-danas/hiling" onClick={handleClose}>
                Hiling
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pag-danas/pangkalusugan" onClick={handleClose}>
                Pangkalusugan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pag-danas/paniniwala" onClick={handleClose}>
                Paniniwala
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pag-danas/pasasalamat" onClick={handleClose}>
                Pasasalamat
              </NavDropdown.Item>
            </NavDropdown>

            {/* Traditions Dropdown for Mobile (Click to Open) */}
            <NavDropdown title="Tradisyon" id="tradition-dropdown-mobile" className="nav-mobile">
              <NavDropdown.Item as={Link} to="/tradisyon/espirituwal" onClick={handleClose}>
              Espirituwal
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tradisyon/kultural" onClick={handleClose}>
               Kultura
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/impormasyon" className="nav-mobile" onClick={handleClose}>
              Impormasyon
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
          <FormControl
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  const matches = Object.keys(searchRoutes).filter(keyword => 
                    keyword.toLowerCase().includes(e.target.value.toLowerCase())
                  );
                  setSuggestions(matches.slice(0, 5));
                }}
              />
              <Button variant="outline-dark search" type="submit">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarPage;
