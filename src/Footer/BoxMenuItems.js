import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import './BoxMenuItems.css'

const BoxMenuItems = ({ itemMenu, nameItems }) => {
  return (
      <Box pl='1rem' pr='1rem' >
          <hr />
        <Text fontWeight='700' >{ nameItems }</Text>
        {
            itemMenu.map( (item, index) => (
                <Flex key={ index } >
                    <NavLink to={ item.link } fontWeight='300' pt='.1rem' pb='.1rem' fontSize='1rem' >{ item.name }</NavLink>
                </Flex>
            ))
        }
    </Box>
  )
}

export default BoxMenuItems