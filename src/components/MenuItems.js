// import { Link } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import "./MenuItems.css"
import { Flex } from "@chakra-ui/react";

const MenuItems = ({ menuItems }) => {

  return (
    <Flex className="menu">
      {menuItems.map((item) => (
        <li key={item.link}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </Flex>
  );
};

export default MenuItems;