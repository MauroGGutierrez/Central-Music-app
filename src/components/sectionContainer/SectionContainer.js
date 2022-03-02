import { Flex } from '@chakra-ui/react'
import React from 'react'
import NewProducts from './NewProducts'

const SectionContainer = () => {
  return (
    <Flex w='100%' mt='15rem'>
      <NewProducts />
    </Flex>
  )
}

export default SectionContainer