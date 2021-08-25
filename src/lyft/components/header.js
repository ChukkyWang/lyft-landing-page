import React from "react";
import { FaDotCircle, FaSearch } from "react-icons/fa";
import "../assets/styles/components/styles.css";

function Header() {
  return (
    <header>
      <div className="header_styles">
        <div className="logo_place">
                    <img src="https://www.logo.wine/a/logo/Lyft/Lyft-Logo.wine.svg" alt="Logo" />
        </div>
        {/* <SearchBar /> */}
        <MenuBar />
      </div>
    </header>
  );
}

export default Header;

//Search Bar
function SearchBar() {
  return (
    <div>
      <form action="">
        <div className="icon_here">
          <FaDotCircle />
        </div>
        <div className="form_props">
          <input type="text" id="searchBar" />
          <label htmlFor="searchBar">Where are you going?</label>
        </div>
        <div className="another_icon_here">
          <FaSearch />
        </div>
      </form>
    </div>
  );
}

//Menu Bars
function MenuBar(params) {
  return (
    <div className="nav_bar">
      <nav>
        <ul>
          <li>
            <SearchBar />
          </li>
          <>
            <li>Driver</li>
            <li>Rider</li>
            <li>Business</li>
            <li>Login</li>
            <li>Sign Up</li>
          </>
        </ul>
      </nav>
    </div>
  );
}
