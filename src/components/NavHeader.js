import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
import React from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

import imagen1 from "../img/Central-Music-Logo.png";

const NavHeader = () => {
  const menuItems = [
    { link: "/guitars", name: "Guitars" },
    { link: "/accessories", name: "Accessories" },
    { link: "/storage", name: "Storage" },
    { link: "/lessons", name: "Lessons" },
    { link: "/repairs", name: "Repairs" },
  ];

  return (
    <Flex w="100%" h="7rem" align="center" pt="2rem" pb="1rem">
      <Box pl="4rem">
        <img src={imagen1} alt="icon-music" />
      </Box>
      <Box p="3" color="white">
        <MenuItems menuItems={menuItems} />
      </Box>
      <Spacer />
      <Box pr="1rem">
        <Link to={"/shopcart"}>
          <IconButton
            colorScheme="red"
            fontSize="20px"
            icon={<AiOutlineShoppingCart />}
            isRound="true"
          />
        </Link>
      </Box>
      <Box pr="6rem">
        <Link to={"/myuser"}>
          <IconButton
            colorScheme="red"
            fontSize="22px"
            icon={<BsPerson />}
            isRound="true"
          />
        </Link>
      </Box>
    </Flex>
  );
};

export default NavHeader;
