import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
