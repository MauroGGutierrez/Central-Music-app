import React from "react";
import { Icon, Flex, Image } from "@chakra-ui/react";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import logoImagen from "../image/Central-Music-Logo.png";

const BoxSocial = () => {
  return (
    <>
      <Image src={logoImagen} alt="Central Music Logo" pb="1rem" display={{base:"none",md:"block",lg:"block", xl:"block"}}/>
      <Flex justify={{base:"center",md:"flex-end", lg:"flex-end", xl:"flex-end"}} mt={{base:"2rem",md:"0", lg:"0", xl:"0"}}>
        <Icon w="1.5rem" h="1.5rem">
          <FaYoutube />
        </Icon>
        <Icon w="1.5rem" h="1.5rem">
          <FaTwitter />
        </Icon>
        <Icon w="1.5rem" h="1.5rem">
          <FaInstagram />
        </Icon>
        <Icon w="1.5rem" h="1.5rem">
          <FaFacebook />
        </Icon>
      </Flex>
    </>
  );
};

export default BoxSocial;
