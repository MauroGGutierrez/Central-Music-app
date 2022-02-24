import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import PinkImg from "../img/img-pink2.png";

const SubHero = () => {
  return (
    <Box
      w="90%"
      h={250}
      bgImage={`url(${PinkImg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt="155px"
      ml="60px"
      mr="60px"
      borderRadius="0.5rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center" w="40%">
        <Heading fontSize="2.7rem" color="white">
          FREE GUITAR LESSONS!{" "}
        </Heading>
        <Heading fontSize="1.5rem" color="white" fontWeight="400">
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
