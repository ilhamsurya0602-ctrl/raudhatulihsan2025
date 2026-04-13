import { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-title">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="company-title">Hadroh Raudhatul Ihsan</h1>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "menu active" : "menu"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Tentang</Link></li>
        <li><Link to="/gallery">Foto/Video</Link></li>
        <li><Link to="/RI Apparel">RI Apparel</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
