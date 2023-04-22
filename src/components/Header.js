import React from "react";
import { useState } from "react"; //useStatd is a named import
import { LOGO_URL } from "../utils/constants";

const loggedIn = () => {
  return true;
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div style={{display:"flex", alignItems:"center"}}>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)} style={{padding:"10px", background:"orange", border:"none"}}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)} style={{padding:"10px", background:"orange", border:"none"}}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
