import { Box, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

function Loader({loading}) {
  if(loading){
    return (
      <Box w='100%' h='fit-content' mt='2rem' display='flex' flexDir='column'>
        <Spinner mx='auto' mb='1rem' />
        <Text textAlign='center'>Cargando... </Text>
      </Box>
    )
  }
}

export default Loader