import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import PinkImg from "../img/img-pink2.png";

const SubHero = () => {
  return (
    <Box
      w="90%"
      h={240}
      bgImage={`url(${PinkImg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{base:"13rem",sm:"13rem", md:"11rem", lg:"12rem",xl:"9.68rem"}}
      mx={{ base: "6%", sm: "7%", md: "4rem", xl: "4rem" }}
      // ml="60px"
      // mr="60px"
      borderRadius="0.5rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        textAlign="center"
        w={{ base: "70%", sm: "60%", md: "52%", lg: "52%", xl: "41%" }}
      >
        <Heading
          fontSize={{
            base: "1.8rem",
            sm: "2.2rem",
            md: "2.1rem",
            lg: "2.5rem",
            xl: "2.7rem",
          }}
          color="white"
        >
          FREE GUITAR LESSONS!{" "}
        </Heading>
        <Heading
          fontSize={{
            base: "1rem",
            sm: "1rem",
            md: "1.3rem",
            lg: "1.5rem",
            xl: "1.5rem",
          }}
          color="white"
          fontWeight="400"
        >
          Purchase any guitar over $499.99 and recieve a one-hour guitar lesson
          free.{" "}
        </Heading>
        <Button colorScheme="orange" mt="1rem" borderRadius="1.3rem">
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
};

export default SubHero;
