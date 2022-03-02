import React from "react";
import { HStack, Spacer, Box, Flex } from "@chakra-ui/react";
import BoxMenuItems from "./BoxMenuItems";
import Copyright from "./Copyright";
import BoxSocial from "./BoxSocial";
import { fistDataItems, secondDataItems } from "./DataItems";
const Footer = () => {
  return (
    <>
      <Flex w="100%" h="auto" background="grey" p={8} color="white">
        <HStack w="100%" h="auto" flexDirection={{base:"column",md:"row", lg:"row", xl:"row"}}>
          <Flex>
            <BoxMenuItems itemMenu={fistDataItems} nameItems="My Account" />
            <Flex display={{base:"none",md:"block", lg:"block", xl:"block"}}>
            <BoxMenuItems itemMenu={secondDataItems} nameItems="Store" />
            </Flex>
          </Flex>
          <Spacer />
          <Box>
            <BoxSocial />
          </Box>
        </HStack>
      </Flex>
      <Copyright />
    </>
  );
};

export default Footer;
