// import { Link } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import "./MenuItems.css"

const MenuItems = ({ menuItems }) => {
  return (
    <ul className="menu">
      {menuItems.map((item) => (
        <li key={item.link}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;