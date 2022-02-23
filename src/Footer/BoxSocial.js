import React from 'react'
import { Icon, Flex ,Image } from '@chakra-ui/react'
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import logoImagen from '../image/Central-Music-Logo.png'

const BoxSocial = () => {
  return (
    <>
        <Image src={ logoImagen } alt='Central Music Logo' pb='1rem'/>
        <Flex justify='flex-end'>
            <Icon w='1.5rem' h='1.5rem'>
                <FaYoutube />
            </Icon>
            <Icon w='1.5rem' h='1.5rem'>
                <FaTwitter />
            </Icon>
            <Icon w='1.5rem' h='1.5rem'>
                <FaInstagram />
            </Icon>
            <Icon w='1.5rem' h='1.5rem'>
                <FaFacebook />
            </Icon>
        </Flex>
    </>
  )
}

export default BoxSocial