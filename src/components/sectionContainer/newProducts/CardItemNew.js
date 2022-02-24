import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardItemNew = ({ itemsCard }) => {
  return (
    <>
      {itemsCard.map((item, index) => (
          <Flex key={index} 
          direction="column"
          boxShadow='0px 1px 2px 0px rgba(60, 64, 67, 0.6)'
          borderRadius='.5rem'
          m='1rem'
          >
            <Box>
              <Image src={item.img} />
            </Box>
            <Flex direction="row">
              <Box ml='2rem'>
                <Text fontWeight='600'>{item.name}</Text>
                <Text pb='.5rem'>{item.description}</Text>
                <Text 
                  mb='1rem'
                  borderRadius='1rem'
                  border='1px solid #F7F7F7'
                  background='#F0F0F0'
                  w='8rem'
                  pt='.2rem'
                  pb='.2rem'
                  >{item.colors} colors available</Text>
              </Box>
              <Box fontWeight='600' pl='2rem' fontSize='1.4rem'>{item.coast}</Box>
            </Flex>
          </Flex>
      ))}
    </>
  );
};

export default CardItemNew;
