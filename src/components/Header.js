import { Box, Heading, Spacer} from '@chakra-ui/react'
import React from 'react'
import bgImage from "../img/hero.png"
import NavHeader from './NavHeader'
import SubHero from './SubHero'

const Header = () => {
  return (
    <Box bgImage={`url(${bgImage})`} w="100%" h="121vh" bgSize="cover">
      <NavHeader/>
    <Box w="50%" mt="140px" pl="60px"> 
     <Heading fontSize="3.9rem" color="white" >Fullfilling dreams with strings attached</Heading>
    </Box>
    <SubHero/>
    <br/>
    </Box>
  )
}

export default Header