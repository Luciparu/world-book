import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Logo from "./img/Flag-Cambodia.webp";
import Home from "./Components/Home";
import Country from "./Components/Country"
import Continent from "./Components/Continent"
import About from "./Components/About"

function App() {
  return (
    <div className="navbar-body">
    <nav className="Navbar">
      <ul>
        <li><img src={Logo} height="50px" alt="logo.webp"/></li>
      </ul>
      <ul>
        <li className="links">
          <Link to="/" className="content">Home</Link>
        </li>
      </ul>
      <ul>
        <li className="links">
          <Link to="/country" className="content">Country</Link>
        </li>
      </ul>
      <ul>
        <li className="links">
          <Link to="/continent" className="content">continent</Link>
        </li>
      </ul>
      <ul>
        <li className="links">
          <Link to="/about" className="content">About</Link>
        </li>
      </ul>

    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country" element={<Country/>} />
        <Route path="/continent" element={<Continent/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
