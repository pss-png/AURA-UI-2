import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav>
      <div className="nav-left">
        <h1 className="logosection">
          <p>Aura UI</p>
        </h1>
      </div>

      <div className="nav-center">
        <h2 className="title">UI Component Library</h2>
        <h3 className="subtitle">Build Beautiful Interfaces</h3>
      </div>

      <div className="searchsection">
        <input type="text" placeholder="Search components..." />
      </div>

      <ul className="nav-menu">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/buttons"
            className={location.pathname === "/buttons" ? "active" : ""}
          >
            Buttons
          </Link>
        </li>
        <li>
          <Link
            to="/docs"
            className={location.pathname === "/docs" ? "active" : ""}
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            to="/aboutUs"
            className={location.pathname === "/aboutUs" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}