import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "./MenuItems.css"

import imagen1 from "../img/Central-Music-Logo.png";

const NavHeader = () => {
  const [display, setDisplay] = useState('none')

  const menuItems = [
    { link: "/guitars", name: "Guitars" },
    { link: "/accessories", name: "Accessories" },
    { link: "/storage", name: "Storage" },
    { link: "/lessons", name: "Lessons" },
    { link: "/repairs", name: "Repairs" },
  ];

  return (
    <Flex w="100%" minH={"7rem"} align="center" pt="2rem" pb="1rem">
      <Box pl={{ base: "1rem", md: "4rem", xl: "4rem" }} w="18rem">
        <img src={imagen1} alt="icon-music" />
      </Box>
      <Box p="3" color="white">
        <Flex className="menu" display={{ base: "none", xl: "flex" }} flexDirection="row">
          <MenuItems menuItems={menuItems} />
        </Flex>
        <Flex w="100%" bgColor="gray.700" zIndex={20} h="100vh" pos="fixed" top="0" right="0" overflowY="auto" flexDir="column" display={display}>
           <Flex justify="center">
            <IconButton
            arial-label="Close Menu"
            size="lg"
            icon={<CloseIcon />}
            isRound="true"
            mt={2}
            mb={5}
            ml={9}
            colorScheme="red"
            onClick={() => setDisplay('none')}
            />
          </Flex>
          <Flex className="menu" align="center" justifyContent="center" flexDirection="column">
            <MenuItems menuItems={menuItems}/>
          </Flex>
        </Flex>
      </Box>
      <Spacer />
      <IconButton
        arial-label="OpenMenu"
        size="lg"
        icon={<HamburgerIcon />}
        display={{ base: "flex", xl: "none" }}
        isRound="true"
        mr={9}
        colorScheme="red"
        onClick={() => setDisplay('flex')}
      />
      <Flex display={{ base: "none", xl: "flex" }}>
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
    </Flex>
  );
};

export default NavHeader;
