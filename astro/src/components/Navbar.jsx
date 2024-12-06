import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#why", label: "Dlaczego my" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#website-creation", label: "Czego używamy" },
    { href: "#contact", label: "Kontakt" }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo">Logo</a>
        
        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;