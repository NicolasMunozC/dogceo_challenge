import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeButton({colorMode, toggleColorMode}) {

  return (
    <IconButton 
    aria-label='dark button'
    position='absolute' 
    top='0.8rem' 
    right='0.8rem' 
    icon={colorMode === 'light' ? <FaMoon /> : <FaSun />} 
    variant='ghost'
    fontSize='3xl'
    onClick={toggleColorMode}
    isRound
    _hover={{backgroundColor: 'transparent'}}
    colorScheme='blue'
    />
  )
}

export default DarkModeButton