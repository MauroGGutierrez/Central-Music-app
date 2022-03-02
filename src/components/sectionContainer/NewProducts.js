import React from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import newProducts from '../dataItems/DataNewProducts'
import popularFind from '../dataItems/DataPopularFinds'
import CardItemNew from './newProducts/CardItemNew'
import CardPopularFinds from './productsFinds/CardPopularlFinds'

const NewProducts = () => {
    return (
        <Flex direction='column' w='100%' > 
            <Box>
                <Center>
                    <Heading m='1rem' pt="2rem" borderTop="4px solid red">New Products</Heading>
                </Center>
                <Flex justifyContent='center'>
                    <CardItemNew itemsCard={ newProducts } />
                </Flex>
            </Box>
            <Box>
                <Center>
                    <Heading m='1rem' pt="2rem" borderTop="4px solid red">Popular finds</Heading>
                </Center>
                <Flex justifyContent='center' mb='1rem'>
                    <CardPopularFinds itemsCard={ popularFind }/>
                </Flex>
            </Box>
    </Flex>
  )
}

export default NewProducts