import React from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { newProducts, popularFind  } from '../../DataItems'
import CardItemNew from './CardItemNew'

const NewProducts = () => {
    return (
        <Flex direction='column' w='100%' > 
            <Box>
                <Center>
                    <Heading m='1rem'>New Products</Heading>
                </Center>
                <Flex justifyContent='center'>
                    <CardItemNew itemsCard={ newProducts } />
                </Flex>
            </Box>
            <Box>
                <Center>
                    <Heading m='1rem'>Popular finds</Heading>
                </Center>
                <Flex justifyContent='center' mb='1rem'>
                    <CardItemNew itemsCard={ popularFind }/>
                </Flex>
            </Box>
    </Flex>
  )
}

export default NewProducts