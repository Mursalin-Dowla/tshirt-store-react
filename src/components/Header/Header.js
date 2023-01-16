import React from "react";
import "./Header.css";
import CustomLink from "../../utilities/CustomLink";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-icon">
        <h3>Header icon</h3>
      </div>
      <div className="header-links">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/orderreview">Orders</CustomLink>
      </div>
    </div>
  );
};

export default Header;
