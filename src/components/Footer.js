import { Link, Text } from '@chakra-ui/react'
import React from 'react'

function Footer({colorMode}) {
  return (
    <Text 
    position='absolute'
    bottom='0.5rem' 
    right='0.5rem'
    textColor={colorMode === 'light' ? 'blackAlpha.800' : 'whiteAlpha.800'}>
      Creado con ❤️ por 
      <Link fontWeight='extrabold' ml='0.2rem' href='https://nicolasmunozc.github.io'>Nicolas Muñoz</Link>
    </Text>
  )
}

export default Footer