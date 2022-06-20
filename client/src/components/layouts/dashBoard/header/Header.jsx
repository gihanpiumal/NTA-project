import React from "react";
import { Button } from "antd";

import "./Header.scss"

const Header = () => {
  return (
    <div className="navBar-main">
      <div className="navBar-text">
        <div className="navBar-logo" >LOGO</div>
        <div className="navBar-links">
          <a href="#"  >Add New</a>
          <a href="#">View All</a>
        </div>
        <div className="navBar-logout">
          <Button>Logout</Button>
        </div>
      </div>
    </div>
  )
};
export default Header;
