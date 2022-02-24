import { Flex } from '@chakra-ui/react'
import React from 'react'
import NewProducts from './newProducts/NewProducts'
// import PopularFinds from './popularFinds/PopularFinds'

const SectionContainer = () => {
  return (
    <Flex w='100%' mt='15rem'>
      <NewProducts />
      {/* <PopularFinds /> */}
        
    </Flex>
  )
}

export default SectionContainer