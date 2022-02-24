import React from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { newProducts, popularFind  } from '../../DataItems'
import CardItemNew from './CardItemNew'

const NewProducts = () => {
    return (
        <Flex direction='column' w='100%' > 
            <Box>
                <Center>
                    <Heading pt='1rem'>New Products</Heading>
                </Center>
                <Flex justifyContent='center' pl='1rem' pr='1rem' pt='1rem' pb='1rem' >
                    <CardItemNew itemsCard={ newProducts } />
                </Flex>
            </Box>
            <Box>
                <Center>
                    <Heading pt='1rem'>Popular finds</Heading>
                </Center>
                <Flex justifyContent='center'>
                    <CardItemNew itemsCard={ popularFind } pl='1rem' pr='1rem' pb='1rem'/>
                </Flex>
            </Box>
    </Flex>
  )
}

export default NewProducts