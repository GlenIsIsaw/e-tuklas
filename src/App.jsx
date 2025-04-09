import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPage from "./Layouts/NavbarPage";
import Footer from "./Layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import History from "./pages/History";
import Tradition from "./pages/Tradition";
import Experience from "./pages/Experience";
import './App.css'

function App() {
  return (
    <Router>
      <NavbarPage/>  {/* Navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/history" element={<History />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tradition" element={<Tradition/>} />
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;