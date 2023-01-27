import { Box, Spinner, Text } from '@chakra-ui/react'
import React from 'react'

function Loader({loading}) {
  return (
    <Box w='100%' h='fit-content' mt='2rem' display='flex' flexDir='column' hidden={!loading}>
    <Spinner mx='auto' mb='1rem' />
    <Text textAlign='center'>Cargando... </Text>
  </Box>
  )
}

export default Loader