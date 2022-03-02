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
        w={{ base: "70%", sm: "20rem", md: "50%", lg: "28rem", xl: "41%" }}
        mt="140px"
        // pl={{ base: "", md: "60px", xl: "60px" }}
        ml={{ base: "15%", sm: "24%", md: "7%", lg: "7%", xl: "5%" }}
        textAlign={{ base: "center", md: "left", xl: "left" }}
      >
        <Heading
          fontSize={{
            base: "2.1rem",
            sm: "2.5rem",
            md: "3.4rem",
            lg: "3.5rem",
            xl: "3.9rem",
          }}
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
