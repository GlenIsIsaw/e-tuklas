import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarPage from "./Layouts/NavbarPage";
import Footer from "./Layouts/Footer";
import Home from "./pages/Home";
import Kasaysayan from "./pages/Kasaysayan";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import History from "./pages/History";
import Tradition from "./pages/Tradition";
import Experience from "./pages/Experience";
import Search from "./pages/Search";
import Hiling from "./components/Hiling";
import Pangkalusugan from "./components/Pangkalusugan";
import Paniniwala from "./components/Paniniwala";
import Pasasalamat from "./components/Pasasalamat";
import Esperituwal from "./components/Esperituwal";
import Kultural from "./components/Kultural";
import './App.css'

function App() {
  return (
    <Router>
      <NavbarPage/>  {/* Navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kasaysayan" element={<Kasaysayan />} />
        <Route path="/impormasyon" element={<Contact />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/history" element={<History />} />
        <Route path="/pag-danas" element={<Experience />}>
        <Route path="hiling" element={<Hiling />} />
        <Route path="pangkalusugan" element={<Pangkalusugan />} />
        <Route path="paniniwala" element={<Paniniwala />} />
        <Route path="pasasalamat" element={<Pasasalamat />} />
        </Route>
        <Route path="/tradisyon" element={<Tradition/>} >
        <Route path="esperituwal" element={<Esperituwal />} />
        <Route path="kultural" element={<Kultural />} />
        </Route>
        <Route path="/search-results" element={<Search />} />
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;