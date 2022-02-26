import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import bgImage from "../img/hero.png";
import NavHeader from "./NavHeader";
import SubHero from "./SubHero";

const Header = () => {
  return (
    <Box
      bgImage={`url(${bgImage})`}
      w={useBreakpointValue({ base: "100%", xl: "100%" })}
      h="50rem"
      bgSize="cover"
      bgPosition="center"
      mb={{ base: "1rem", xl: "8rem" }}
    >
      <NavHeader />
      <Box
        w={{ base: "90%", md: "50%", xl: "50%" }}
        mt="140px"
        pl={{ base: "4rem", md: "60px", xl: "60px" }}
        pr="auto"
        textAlign={{ base: "center", md: "left", xl: "left" }}
      >
        <Heading
          fontSize={{ base: "2rem", md: "3.7rem", xl: "3.9rem" }}
          color="white"
        >
          Fullfilling dreams with strings attached
        </Heading>
      </Box>
      <SubHero />
      <br />
    </Box>
  );
};

export default Header;
