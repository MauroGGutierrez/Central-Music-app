import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import PinkImg from "../img/img-pink2.png";

const SubHero = () => {
  return (
    <Box
      w="90%"
      h={{ base: "30vh", sm: "36vh", md: "36vh", lg: "40vh", xl: "40vh" }}
      bgImage={`url(${PinkImg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt="155px"
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
        w={{ base: "80%", sm: "70%", md: "52%", lg: "50%", xl: "41%" }}
      >
        <Heading
          fontSize={{
            base: "1.4rem",
            sm: "2.1rem",
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
