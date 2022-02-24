import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardItemNew = ({ itemsCard }) => {
  return (
    <>
      {itemsCard.map((item, index) => (
          <Flex key={index} direction="column" boxShadow='-4px 7px 5px -5px rgba(0,0,0,0.3)'  borderRadius='2rem'>
            <Box>
              <Image src={item.img} />
            </Box>
            <Flex direction="row">
              <Box>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>{item.colors} colors available</Text>
              </Box>
              <Box>{item.coast}</Box>
            </Flex>
          </Flex>
      ))}
    </>
  );
};

export default CardItemNew;
