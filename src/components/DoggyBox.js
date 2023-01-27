import { 
    Avatar,
    Box, 
    Heading,
} from '@chakra-ui/react'
import React from 'react'

function DoggyBox({colorMode, breed, breedRandomImage}) {





  return (
    <Box w='100%' h='fit-content' bg={colorMode === 'light' ? '' : 'blackAlpha.400'} borderRadius='lg' py='1rem' px='1rem' boxShadow='lg'>
        <Box display='flex' flexDir='row' justifyContent='space-between'>
            <Heading mr='1rem' fontSize='2xl' textTransform='capitalize'>{breed}</Heading>
            <Avatar src={breedRandomImage} size='sm'/>
        </Box>
    </Box>
  )
}

export default DoggyBox